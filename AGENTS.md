<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Frontend UI

Before building or changing UI (components, layouts, prototypes, Storybook demos), read DESIGN.md and use tokens from `styles/tokens.css`. If a token is missing, flag it—do not invent values. Fall back to standard MUI styling when no token applies.

Default behavior: Storybook is design-system reference only. Build requested pages in app runtime; do not add or modify page stories unless explicitly asked.


## Product pages

When the user prompt includes the words "product page", also read `rules/product-page.md` and follow its layout structure (tabs, hero, responsive breakpoints).
