import fs from "fs";
import path from "path";
import { projects } from "./components/portfolio/projects";

const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const read = (...p) => fs.readFileSync(path.join(...p), "utf8");
const indexHtml = read(publicDir, "index.html");

const SITE = "https://rodrigo-palma.vercel.app";
const MAX_PORTFOLIO_BYTES = 150 * 1024;
const MAX_BANNER_BYTES = 120 * 1024;
const BANNER = "/img/slider/home-banner.webp";

test("every portfolio image is a WebP under 150 KB with intrinsic size", () => {
  projects.forEach((project) => {
    expect(project.img).toMatch(/\.webp$/);
    expect(fs.statSync(path.join(publicDir, project.img)).size).toBeLessThanOrEqual(
      MAX_PORTFOLIO_BYTES
    );
    expect(project.width).toBeGreaterThan(0);
    expect(project.height).toBeGreaterThan(0);
  });
});

test("the LCP banner is a small WebP preloaded with high priority", () => {
  expect(fs.statSync(path.join(publicDir, BANNER)).size).toBeLessThanOrEqual(
    MAX_BANNER_BYTES
  );
  expect(indexHtml).toMatch(
    new RegExp(`<link[^>]+rel="preload"[^>]+as="image"[^>]+href="%PUBLIC_URL%${BANNER}"[^>]+fetchpriority="high"`)
  );
  expect(read(root, "src/components/slider/SliderAnimation.jsx")).toContain(BANNER);
});

test("the about photo is a WebP with explicit size and lazy loading", () => {
  const about = read(root, "src/components/about/AboutAnimation.jsx");

  expect(about).toMatch(/<img[^>]+src="img\/about\/about-me\.webp"[^>]+width="\d+"[^>]+height="\d+"[^>]+loading="lazy"/);
  expect(fs.existsSync(path.join(publicDir, "img/about/about-me.webp"))).toBe(true);
});

test("fonts load from index.html with preconnect, swap and only Rubik", () => {
  const scss = read(root, "src/assets/scss/main/_variable.scss");

  expect(scss).not.toMatch(/fonts\.googleapis\.com/);
  expect(indexHtml).toContain('<link rel="preconnect" href="https://fonts.googleapis.com" />');
  expect(indexHtml).toContain('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />');
  expect(indexHtml).toMatch(/fonts\.googleapis\.com\/css2\?family=Rubik:wght@300;400;500;600;700&amp;display=swap/);
  expect(indexHtml).not.toMatch(/Playfair/);
});

test("the font stylesheet does not block the first render", () => {
  expect(indexHtml).toMatch(/<link[^>]+href="https:\/\/fonts\.googleapis\.com\/css2[^"]+"[^>]+media="print"[^>]+onload="this\.media='all'"/);
  expect(indexHtml).toMatch(/<noscript>\s*<link[^>]+rel="stylesheet"[^>]+fonts\.googleapis\.com/);
});

test("below-the-fold images load lazily and the about photo keeps its aspect ratio", () => {
  const portfolio = read(root, "src/components/portfolio/PortfolioAnimation.jsx");
  const awards = read(root, "src/components/award/AwardsAnimation.jsx");
  const style = read(root, "src/assets/scss/main/_style.scss");

  expect(portfolio).toMatch(/<img[^>]+loading="lazy"/);
  expect(awards).toMatch(/<img[^>]+loading="lazy"/);
  expect(style).toMatch(/\.img-in \{[\s\S]*?img \{\s*height: auto;/);
});

test("the og:image stays the JPEG it already was", () => {
  expect(indexHtml).toContain(
    `<meta property="og:image" content="${SITE}/img/slider/home-professional.jpg" />`
  );
  expect(fs.existsSync(path.join(publicDir, "img/slider/home-professional.jpg"))).toBe(true);
});

test("the map iframe loads lazily", () => {
  expect(read(root, "src/components/contact/Map.jsx")).toMatch(/loading="lazy"/);
});

test("robots.txt allows crawling and points to the sitemap", () => {
  const robots = read(publicDir, "robots.txt");

  expect(robots.split("\n")[0]).toMatch(/^User-agent: \*/);
  expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`);
});

test("sitemap.xml lists the canonical URL", () => {
  const sitemap = read(publicDir, "sitemap.xml");

  expect(sitemap).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  expect(sitemap).toContain(`<loc>${SITE}/</loc>`);
  expect(indexHtml).toContain(`<link rel="canonical" href="${SITE}/" />`);
});

test("the infinite title animation stops under prefers-reduced-motion", () => {
  const animation = read(root, "src/assets/scss/main/_animation.scss");
  const style = read(root, "src/assets/scss/main/_style.scss");

  expect(animation).toMatch(
    /@media \(prefers-reduced-motion: reduce\) \{[\s\S]*?\.title h2:after,[\s\S]*?animation: none;/
  );
  expect(animation + style).not.toMatch(/slide-both-sidee/);
});

test("certification badges are small WebPs with intrinsic size", () => {
  const awards = read(root, "src/components/award/AwardsAnimation.jsx");

  expect(awards).toMatch(/src=\{`img\/award\/\$\{val\.img\}\.webp`\}/);
  expect(awards).toMatch(/width=\{val\.width\}\s+height=\{val\.height\}/);
  ["dp100", "dp600", "pl300", "capm"].forEach((name) => {
    expect(fs.statSync(path.join(publicDir, `img/award/${name}.webp`)).size).toBeLessThan(10 * 1024);
  });
});

test("reviewer avatars declare their size and load lazily", () => {
  const testimonial = read(root, "src/components/testimonial/TestimonialAnimation.jsx");

  expect(testimonial).toMatch(/<img[^>]+width=\{100\}\s+height=\{100\}\s+loading="lazy"/);
});

test("the et-line icon font does not block text with an invisible period", () => {
  expect(read(root, "src/assets/scss/_et-line-font.scss")).toMatch(/font-display: swap;/);
});

test("the below-the-fold project gallery is code-split out of the main bundle", () => {
  const home = read(root, "src/views/all-home-version/HomeDarkAnimation.jsx");

  expect(home).toMatch(/lazy\(\(\) => import\("\.\.\/\.\.\/components\/portfolio\/PortfolioAnimation"\)\)/);
  expect(home).not.toMatch(/^import .*PortfolioAnimation/m);
  expect(home).toMatch(/<Suspense[^>]*>\s*<Portfolio \/>/);
});
