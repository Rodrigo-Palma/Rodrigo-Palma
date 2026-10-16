import { render, screen } from "@testing-library/react";
import Map from "./Map";

const CITY = "Porto Alegre, RS, Brazil";

test("the map is centred on the city, not on a street address", () => {
  render(<Map />);

  const src = screen.getByTitle("Map of Porto Alegre, Brazil").getAttribute("src");
  const url = new URL(src);

  expect(url.origin + url.pathname).toBe("https://www.google.com/maps/embed");
  expect(url.searchParams.get("pb")).toBe(`!1m2!2m1!1s${CITY}`);
  expect(decodeURIComponent(src)).not.toMatch(/\d{5}-\d{3}/);
});
