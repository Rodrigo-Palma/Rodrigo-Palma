import { render, screen } from "@testing-library/react";
import Awards from "./AwardsAnimation";

test("badge images are decorative because the heading names each award", () => {
  const { container } = render(<Awards />);

  const images = container.querySelectorAll("img");
  expect(images.length).toBeGreaterThan(0);
  images.forEach((img) => expect(img.getAttribute("alt")).toBe(""));
  expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(images.length);
});
