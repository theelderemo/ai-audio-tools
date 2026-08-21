export const BADGE_CODES = {
  free: "f",
  freemium: "fm",
  paid: "p",
  api: "api",
  "open-source": "os",
  enterprise: "ent",
  vst: "vst",
  hardware: "hw",
  acquired: "acq"
};

const HEADING_RE = /^(#{1,6}) (.+?)\s*$/;
const ENTRY_RE = /^- \[([^\]]+)\]\(([^)\s]+)\)((?: !\[[^\]]+\]\([^)\s]+\))*)(?: _\(([^)]+)\)_)? - (.+)$/;
const BADGE_ALT_RE = /!\[([^\]]+)\]/g;
const REMOVED_RE = /^- \*\*(.+?)\*\* `([^`\s]+)` _\((.+?)\)_ - (.+)$/;
export const REMOVED_TITLE = "Removed";

export function githubSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N} _-]/gu, "")
    .replace(/ /g, "-");
}

export function parseReadme(text) {
  const lines = text.split("\n");
  const sections = [];
  const removed = [];
  const errors = [];
  let current = null;

  lines.forEach((raw, index) => {
    const lineNo = index + 1;
    const heading = raw.match(HEADING_RE);
    if (heading) {
      current = { level: heading[1].length, title: heading[2], line: lineNo, entries: [] };
      sections.push(current);
      return;
    }
    if (current && current.title === REMOVED_TITLE) {
      if (!raw.startsWith("- ")) return;
      const gone = raw.match(REMOVED_RE);
      if (!gone) {
        errors.push({ line: lineNo, message: "removed entry does not match `- **Name** `url` _(Category)_ - Reason.`" });
        return;
      }
      const [, name, url, category, reason] = gone;
      if (!/^https?:\/\//.test(url)) {
        errors.push({ line: lineNo, message: `URL must start with http:// or https:// — got \`${url}\`` });
      }
      removed.push({ n: name, u: url, c: category, r: reason, line: lineNo });
      return;
    }
    if (!raw.startsWith("- [")) return;
    const entry = raw.match(ENTRY_RE);
    if (!entry) {
      errors.push({ line: lineNo, message: "entry does not match `- [Name](url) ![badge] - Description.`" });
      return;
    }
    const [, name, url, badgeBlob, noteText, description] = entry;
    const badges = [];
    for (const [, alt] of badgeBlob.matchAll(BADGE_ALT_RE)) {
      const code = BADGE_CODES[alt];
      if (!code) {
        errors.push({ line: lineNo, message: `unknown badge \`![${alt}]\` (known: ${Object.keys(BADGE_CODES).join(", ")})` });
        continue;
      }
      badges.push(code);
    }
    if (!/^https?:\/\//.test(url)) {
      errors.push({ line: lineNo, message: `URL must start with http:// or https:// — got \`${url}\`` });
    }
    if (!current) {
      errors.push({ line: lineNo, message: "entry appears before any section heading" });
      return;
    }
    current.entries.push({ n: name, u: url, b: badges, note: noteText ? `(${noteText})` : undefined, d: description, line: lineNo });
  });

  const categories = [];
  sections.forEach((section, i) => {
    if (section.entries.length === 0) return;
    let name = section.title;
    for (let j = i - 1; j >= 0; j--) {
      const candidate = sections[j];
      if (candidate.level < section.level) {
        if (candidate.entries.length === 0) name = `${candidate.title} — ${section.title}`;
        break;
      }
    }
    categories.push({ name, title: section.title, level: section.level, line: section.line, tools: section.entries });
  });

  return { sections, categories, removed, errors };
}

export function slugifyId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
