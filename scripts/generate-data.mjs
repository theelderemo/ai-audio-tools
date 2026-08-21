import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { parseReadme, slugifyId } from "./readme-parser.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const README = join(root, "README.md");
const DATA = join(root, "site", "data.js");
const INDEX = join(root, "site", "index.html");
const checkOnly = process.argv.includes("--check");

const readme = readFileSync(README, "utf-8");
const dataJs = readFileSync(DATA, "utf-8");
const indexHtml = readFileSync(INDEX, "utf-8");

const { categories, removed, errors } = parseReadme(readme);
if (errors.length > 0) {
  for (const e of errors) console.error(`README.md:${e.line} ${e.message}`);
  process.exit(1);
}
if (categories.length === 0) {
  console.error("no categories with tool entries found in README.md");
  process.exit(1);
}

const existingIds = new Map();
for (const [, id, name] of dataJs.matchAll(/\{ id: "([^"]+)", name: "([^"]+)", tools: \[/g)) {
  existingIds.set(name, id);
}
for (const cat of categories) {
  cat.id = existingIds.get(cat.name) ?? slugifyId(cat.name);
}

const idSet = new Set(categories.map(c => c.id));
if (idSet.size !== categories.length) {
  console.error("duplicate category ids after mapping README headings");
  process.exit(1);
}

const catsStart = dataJs.indexOf("export const CATS");
if (catsStart === -1) {
  console.error("site/data.js has no `export const CATS` block to replace");
  process.exit(1);
}
const prefix = dataJs.slice(0, catsStart);

for (const [, pathCat] of prefix.matchAll(/cat: "([^"]+)"/g)) {
  if (!idSet.has(pathCat)) {
    console.error(`PATHS references cat "${pathCat}" which no longer exists (ids: ${[...idSet].join(", ")})`);
    process.exit(1);
  }
}

const esc = s => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const emitTool = t => {
  const parts = [`n: "${esc(t.n)}"`, `u: "${esc(t.u)}"`, `b: [${t.b.map(c => `"${c}"`).join(",")}]`];
  if (t.note) parts.push(`note: "${esc(t.note)}"`);
  parts.push(`d: "${esc(t.d)}"`);
  return `{ ${parts.join(", ")} }`;
};
const emitCat = c => `{ id: "${c.id}", name: "${esc(c.name)}", tools: [\n${c.tools.map(emitTool).join(",\n")}\n]}`;
const emitRemoved = t => `{ n: "${esc(t.n)}", u: "${esc(t.u)}", c: "${esc(t.c)}", r: "${esc(t.r)}" }`;
const newDataJs = `${prefix}export const CATS = [\n${categories.map(emitCat).join(",\n")}\n];\n\nexport const REMOVED = [\n${removed.map(emitRemoved).join(",\n")}\n];\n`;

const total = categories.reduce((n, c) => n + c.tools.length, 0);
const catCount = categories.length;

const replaceOnce = (source, file, pattern, replacement) => {
  const matches = source.match(new RegExp(pattern.source, pattern.flags.replace("g", "") + "g"));
  if (!matches || matches.length !== 1) {
    console.error(`${file}: expected exactly one match for ${pattern}, found ${matches ? matches.length : 0}`);
    process.exit(1);
  }
  return source.replace(pattern, replacement);
};

let newReadme = readme;
newReadme = replaceOnce(newReadme, "README.md", /tools%20listed-[^-]+-blueviolet/, `tools%20listed-${total}-blueviolet`);
newReadme = replaceOnce(newReadme, "README.md", /\d+(?:%2B)?\+tools\+across\+\d+\+categories/, `${total}+tools+across+${catCount}+categories`);

let newIndex = indexHtml;
newIndex = replaceOnce(newIndex, "site/index.html", /(<span id="stat-tools">)\d+(<\/span>)/, `$1${total}$2`);
newIndex = replaceOnce(newIndex, "site/index.html", /(<span id="stat-cats">)\d+(<\/span>)/, `$1${catCount}$2`);
newIndex = replaceOnce(newIndex, "site/index.html", /(<span id="shown-label" class="shown">)\d+( listed<\/span>)/, `$1${total}$2`);
newIndex = replaceOnce(newIndex, "site/index.html", /(<span id="foot-stats">)\d+ tools · \d+ categories(<\/span>)/, `$1${total} tools · ${catCount} categories$2`);

const targets = [
  [DATA, "site/data.js", dataJs, newDataJs],
  [README, "README.md", readme, newReadme],
  [INDEX, "site/index.html", indexHtml, newIndex]
];
const changed = targets.filter(([, , before, after]) => before !== after);

if (checkOnly) {
  console.log(`parsed ${total} tools in ${catCount} categories`);
  console.log(changed.length === 0 ? "all files in sync" : `out of sync (regeneration would touch: ${changed.map(t => t[1]).join(", ")})`);
  process.exit(0);
}

for (const [path, label, , after] of changed) {
  writeFileSync(path, after);
  console.log(`updated ${label}`);
}
console.log(`${total} tools in ${catCount} categories${changed.length === 0 ? " — everything already in sync" : ""}`);
