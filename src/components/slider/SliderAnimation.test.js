import { render, screen } from "@testing-library/react";
import Slider from "./SliderAnimation";

jest.mock("react-text-loop", () => ({ children }) => <div>{children}</div>);

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
