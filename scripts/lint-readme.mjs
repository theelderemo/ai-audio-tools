import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { parseReadme, githubSlug } from "./readme-parser.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const readme = readFileSync(join(root, "README.md"), "utf-8");

const { sections, categories, errors } = parseReadme(readme);
const problems = errors.map(e => ({ line: e.line, message: e.message }));

for (const cat of categories) {
  const seen = new Map();
  for (const tool of cat.tools) {
    if (!/[.!?]$/.test(tool.d)) {
      problems.push({ line: tool.line, message: `description for "${tool.n}" should end with a period` });
    }
    const key = tool.u.toLowerCase().replace(/\/+$/, "");
    if (seen.has(key)) {
      problems.push({ line: tool.line, message: `"${tool.n}" duplicates ${tool.u} already listed at line ${seen.get(key)} in the same category` });
    } else {
      seen.set(key, tool.line);
    }
  }
}

const slugCounts = new Map();
const anchors = new Set();
for (const section of sections) {
  const base = githubSlug(section.title);
  const n = slugCounts.get(base) ?? 0;
  slugCounts.set(base, n + 1);
  anchors.add(n === 0 ? base : `${base}-${n}`);
}

readme.split("\n").forEach((line, index) => {
  for (const [, anchor] of line.matchAll(/\]\(#([^)]+)\)/g)) {
    if (!anchors.has(anchor)) {
      problems.push({ line: index + 1, message: `internal link #${anchor} does not match any heading` });
    }
  }
});

if (problems.length > 0) {
  problems.sort((a, b) => a.line - b.line);
  for (const p of problems) console.error(`README.md:${p.line} ${p.message}`);
  console.error(`\n${problems.length} problem(s) found`);
  process.exit(1);
}

const total = categories.reduce((n, c) => n + c.tools.length, 0);
console.log(`OK — ${total} tools in ${categories.length} categories, all entries well-formed, all internal links resolve`);
