# Contributing to AI Audio Tools

Thanks for helping make this list better! Here's how to do it right.

Tool suggestions are handled as **Pull Requests**. There's no issue based suggestion flow. If you want a tool on the list, add it following the steps below.

## Adding a Tool

1. **Fork** this repo and create a branch: `git checkout -b add-toolname`
2. Add your tool to the correct category in `README.md`
3. Follow the existing format exactly:

```markdown
- [Tool Name](https://url.com) ![badge] - One-sentence description. Start with a capital letter, end with a period.
```

4. Open a **Pull Request** with the title: `Add: Tool Name`

## Rules

- The tool must be **directly related to AI and audio** — no general-purpose tools
- One tool per PR
- Include the correct pricing badge from the Badge Key in the README
- If the tool is acquired or defunct, add the `![acquired]` badge and note who acquired it
- Descriptions must be **your own words** — do not copy from the tool's own marketing copy verbatim
- No referral links, no affiliate links
- Only edit `README.md` — never `site/`. The website's `site/data.js` is regenerated from this README by CI after your PR merges

## Categories

Pick the most fitting existing category. If you believe a new category is warranted, propose it in your **PR description** and explain why the existing categories don't fit — it'll be discussed on the PR before merging.

## Badge Reference

| Badge | Meaning |
|---|---|
| `![free]` | Completely free |
| `![freemium]` | Free tier + paid upgrades |
| `![paid]` | Paid only |
| `![api]` | Has a public API |
| `![open-source]` | Source code is public |
| `![enterprise]` | Enterprise/B2B focus |
| `![vst]` | Available as a VST plugin |
| `![hardware]` | Physical hardware product |
| `![acquired]` | Acquired by another company |

Use this snippet for each badge (copy from the README's badge key section).

## Code of Conduct

By participating, you agree to follow [Code of Conduct](CODE_OF_CONDUCT.md).
