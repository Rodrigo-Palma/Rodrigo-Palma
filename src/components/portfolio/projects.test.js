import fs from "fs";
import path from "path";
import { projects } from "./projects";

const MAX_IMAGE_BYTES = 150 * 1024;
const publicDir = path.join(__dirname, "..", "..", "..", "public");

test("edgar-rag is the first portfolio card and links to its repo", () => {
  const [first] = projects;

  expect(first.title).toMatch(/^edgar-rag/);
  expect(first.portfolioLink).toBe("https://github.com/Rodrigo-Palma/edgar-rag");
  expect(first.cats).toContain("AI / GenAI");
});

test("edgar-rag card uses a WebP image under 150 KB with intrinsic size", () => {
  const [first] = projects;
  const file = path.join(publicDir, first.img);

  expect(first.img).toMatch(/\.webp$/);
  expect(fs.statSync(file).size).toBeLessThanOrEqual(MAX_IMAGE_BYTES);
  expect(first.width).toBeGreaterThan(0);
  expect(first.height).toBeGreaterThan(0);
});

test("every card has a descriptive alt, not just its category", () => {
  projects.forEach((project) => {
    expect(project.alt).toBeTruthy();
    expect(project.cats).not.toContain(project.alt);
  });
});

test("every card image exists in public/", () => {
  projects.forEach((project) => {
    expect(fs.existsSync(path.join(publicDir, project.img))).toBe(true);
  });
});
