import fs from "fs";
import path from "path";

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const configPath = path.join(root, "vercel.json");

// Mirrors Vercel's router for the routes in vercel.json: routes before
// { handle: "filesystem" } run first, then a static file wins, then the rest.
const resolve = (url) => {
  const { routes } = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const fsIndex = routes.findIndex((r) => r.handle === "filesystem");
  const match = (list) => list.find((r) => new RegExp(`^${r.src}$`).test(url));
  const file = url === "/" ? "/index.html" : url;

  const before = match(routes.slice(0, fsIndex));
  if (before) {
    const location = before.headers && before.headers.Location;
    return location
      ? { status: before.status, location }
      : { status: before.status || 200, dest: before.dest };
  }
  if (fs.existsSync(path.join(publicDir, file)) && fs.statSync(path.join(publicDir, file)).isFile()) {
    return { status: 200, dest: file };
  }
  const after = match(routes.slice(fsIndex + 1));
  return after ? { status: after.status || 200, dest: after.dest } : { status: 404 };
};

test("the root serves the app shell", () => {
  expect(resolve("/")).toEqual({ status: 200, dest: "/index.html" });
});

test("/portfolio permanently redirects to the canonical root", () => {
  ["/portfolio", "/portfolio/"].forEach((url) => {
    expect(resolve(url)).toEqual({ status: 301, location: "/" });
  });
});

test("static files are served as they are", () => {
  expect(resolve("/img/resume.pdf")).toEqual({ status: 200, dest: "/img/resume.pdf" });
  expect(resolve("/robots.txt")).toEqual({ status: 200, dest: "/robots.txt" });
});

test("unknown paths answer a real 404 with the static not-found page", () => {
  ["/nonexistent", "/cv/resume.html", "/portfolio/x"].forEach((url) => {
    expect(resolve(url)).toEqual({ status: 404, dest: "/404.html" });
  });
});

test("the static 404 page is accessible and links back to the portfolio", () => {
  const html = fs.readFileSync(path.join(publicDir, "404.html"), "utf8");

  expect(html).toMatch(/<html lang="en">/);
  expect(html).toMatch(/<title>Page not found \| Rodrigo Palma<\/title>/);
  expect(html).toMatch(/<meta name="robots" content="noindex" \/>/);
  expect(html).toMatch(/<h1>[^<]*404[^<]*<\/h1>/);
  expect(html).toContain('<a href="/">');
});
