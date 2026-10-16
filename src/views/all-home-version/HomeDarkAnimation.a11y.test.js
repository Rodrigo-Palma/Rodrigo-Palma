import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { computeAccessibleName } from "dom-accessibility-api";
import HomeDarkAnimation from "./HomeDarkAnimation";

const renderHome = () =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <HomeDarkAnimation />
    </MemoryRouter>
  );

const headingLevels = (container) =>
  Array.from(container.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(
    (el) => Number(el.tagName.slice(1))
  );

test("every link and button has an accessible name", () => {
  renderHome();

  const unnamed = [...screen.getAllByRole("link"), ...screen.getAllByRole("button")]
    .filter((el) => computeAccessibleName(el).trim() === "")
    .map((el) => el.outerHTML.slice(0, 120));

  expect(unnamed).toEqual([]);
});

test("headings never skip a level on the way down", () => {
  const { container } = renderHome();

  const skips = headingLevels(container).filter(
    (level, i, levels) => i > 0 && level > levels[i - 1] + 1
  );

  expect(skips).toEqual([]);
});

test("the menu toggler names itself and reports its state", () => {
  renderHome();

  const toggler = screen.getByRole("button", { name: /menu/i });
  expect(toggler.getAttribute("aria-expanded")).toBe("false");

  fireEvent.click(toggler);

  expect(toggler.getAttribute("aria-expanded")).toBe("true");
});

test("project images open the gallery from a real button, not an img role", () => {
  const { container } = renderHome();

  expect(container.querySelector('img[role="button"]')).toBeNull();
  expect(screen.getAllByRole("button", { name: /enlarge/i }).length).toBeGreaterThan(0);
});

test("testimonials render as a static list with no carousel clones", () => {
  const { container } = renderHome();

  expect(container.querySelector(".slick-slider")).toBeNull();
  expect(screen.getAllByRole("heading", { name: "Thomas Kemmer" })).toHaveLength(1);
});

test("the content sits in one main landmark that a skip link reaches first", () => {
  const { container } = renderHome();

  const main = screen.getByRole("main");
  const firstLink = container.querySelector("a");

  expect(main.id).toBe("main");
  expect(firstLink.getAttribute("href")).toBe("#main");
  expect(firstLink.textContent).toBe("Skip to content");
  expect(screen.getByRole("banner").contains(main)).toBe(false);
});

test("no heading repeats the H1 text", () => {
  renderHome();

  const h1 = screen.getByRole("heading", { level: 1 }).textContent.trim();
  const repeats = screen
    .getAllByRole("heading")
    .filter((el) => el.tagName !== "H1" && el.textContent.trim() === h1);

  expect(repeats).toEqual([]);
});
