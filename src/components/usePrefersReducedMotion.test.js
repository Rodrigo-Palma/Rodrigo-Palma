import { renderHook } from "@testing-library/react";
import usePrefersReducedMotion, {
  REDUCED_MOTION_QUERY,
  prefersReducedMotion,
} from "./usePrefersReducedMotion";

const mockMatchMedia = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === REDUCED_MOTION_QUERY ? matches : false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};

afterEach(() => {
  delete window.matchMedia;
});

test("reports true when the visitor asked for reduced motion", () => {
  mockMatchMedia(true);

  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(true);
  expect(prefersReducedMotion()).toBe(true);
});

test("reports false when there is no reduced-motion preference", () => {
  mockMatchMedia(false);

  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
});

test("reports false when matchMedia is unavailable", () => {
  const { result } = renderHook(() => usePrefersReducedMotion());

  expect(result.current).toBe(false);
  expect(prefersReducedMotion()).toBe(false);
});
