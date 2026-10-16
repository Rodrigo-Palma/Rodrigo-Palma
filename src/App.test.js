import { render } from "@testing-library/react";
import AOS from "aos";
import App from "./App";
import { REDUCED_MOTION_QUERY } from "./components/usePrefersReducedMotion";

jest.mock("aos", () => ({ init: jest.fn() }));
jest.mock("./router/AllRoutes", () => () => null);
jest.mock("./components/cursor/Cursor", () => () => null);
jest.mock("./components/ScrollToTop", () => () => null);

afterEach(() => {
  delete window.matchMedia;
});

test("AOS is disabled when the visitor asked for reduced motion", () => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === REDUCED_MOTION_QUERY,
  }));

  render(<App />);

  const { disable } = AOS.init.mock.calls[0][0];
  expect(typeof disable === "function" ? disable() : disable).toBe(true);
});
