import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AllRoutes />
    </MemoryRouter>
  );

beforeAll(() => {
  window.scrollTo = () => {};
});

test("/ renders the home page", () => {
  renderAt("/");

  expect(screen.getByRole("heading", { level: 1, name: "Rodrigo Palma" })).toBeTruthy();
  expect(screen.queryByText(/404/)).toBeNull();
});

test("/portfolio redirects to the home page at /", () => {
  renderAt("/portfolio");

  expect(screen.getByRole("heading", { level: 1, name: "Rodrigo Palma" })).toBeTruthy();
});

test("an unknown path renders the NotFound page", () => {
  renderAt("/xyz");

  expect(screen.getByRole("heading", { name: /404/ })).toBeTruthy();
  expect(document.title).toBe("Page not found | Rodrigo Palma");
});

test("the template demo routes are gone and fall through to NotFound", () => {
  renderAt("/home-light-animation");

  expect(screen.getByRole("heading", { name: /404/ })).toBeTruthy();
});
