import { render, screen } from "@testing-library/react";
import Cursor, { CURSOR_QUERY } from "./Cursor";

jest.mock("react-animated-cursor", () => () => <div data-testid="animated-cursor" />);

const mockMatchMedia = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === CURSOR_QUERY ? matches : false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};

afterEach(() => {
  delete window.matchMedia;
});

test("renders the animated cursor for a fine pointer without reduced motion", () => {
  mockMatchMedia(true);

  render(<Cursor />);

  expect(screen.getByTestId("animated-cursor")).toBeTruthy();
});

test("skips the animated cursor on touch or when reduced motion is requested", () => {
  mockMatchMedia(false);

  render(<Cursor />);

  expect(screen.queryByTestId("animated-cursor")).toBeNull();
});

test("skips the animated cursor when matchMedia is unavailable", () => {
  render(<Cursor />);

  expect(screen.queryByTestId("animated-cursor")).toBeNull();
});

test("the query requires a fine pointer and no reduced-motion preference", () => {
  expect(CURSOR_QUERY).toContain("(pointer: fine)");
  expect(CURSOR_QUERY).toContain("(prefers-reduced-motion: no-preference)");
});
