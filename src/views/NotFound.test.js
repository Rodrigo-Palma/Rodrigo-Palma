import fs from "fs";
import path from "path";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

const staticPage = fs.readFileSync(
  path.join(__dirname, "../../public/404.html"),
  "utf8"
);
const textOf = (tag) => staticPage.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))[1];

test("the client-side 404 uses the same copy as public/404.html", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { level: 1 }).textContent.trim()).toBe(textOf("h1"));
  expect(screen.getByText(textOf("p"))).toBeTruthy();
});

test("the footer says all rights reserved", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  expect(screen.getByText(/All rights reserved/)).toBeTruthy();
});
