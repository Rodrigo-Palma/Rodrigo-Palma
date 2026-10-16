import fs from "fs";
import path from "path";

const cv = fs.readFileSync(path.join(__dirname, "..", "cv", "resume.html"), "utf8");

test("the merged PRs link counts only upstream projects", () => {
  const [, href] = cv.match(/<a href="([^"]+)">merged PRs<\/a>/);
  const query = new URL(href.replace(/&amp;/g, "&")).searchParams.get("q");

  expect(query).toBe(
    "is:pr author:Rodrigo-Palma is:merged -user:Rodrigo-Palma -user:zero-to-mastery"
  );
});
