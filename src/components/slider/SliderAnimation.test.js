import { render, screen } from "@testing-library/react";
import Slider from "./SliderAnimation";

jest.mock("react-text-loop", () => ({ children }) => (
  <div data-testid="text-loop">{children}</div>
));

const mockReducedMotion = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === "(prefers-reduced-motion: reduce)" ? matches : false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};

afterEach(() => {
  delete window.matchMedia;
});

test("the e-mail link opens a single valid recipient", () => {
  render(<Slider />);

  const link = screen.getByText("email.rodrigopalma@gmail.com");
  const url = new URL(link.getAttribute("href"));

  expect(url.protocol).toBe("mailto:");
  expect(url.pathname).toBe("email.rodrigopalma@gmail.com");
});

test("the phone link is a valid RFC 3966 global number", () => {
  render(<Slider />);

  const link = screen.getByText("+55 53-99957-7605");

  expect(link.getAttribute("href")).toMatch(/^tel:\+\d+$/);
});

test("the role phrases rotate when motion is allowed", () => {
  mockReducedMotion(false);

  render(<Slider />);

  expect(screen.getByTestId("text-loop")).toBeTruthy();
});

test("the role phrases stay still under reduced motion", () => {
  mockReducedMotion(true);

  render(<Slider />);

  expect(screen.queryByTestId("text-loop")).toBeNull();
  expect(screen.getByText(/AI Engineer · .*Data Engineer/)).toBeTruthy();
});
