# New project checklist

Use this after creating a repo from the **WebMD Project Template**.

## Setup

- [ ] Update `name` in `package.json`
- [ ] Update `title` / `description` in `app/layout.tsx` metadata
- [ ] Replace `public/better-yourself-logo.png` or set `logoSrc` / `logoAlt` on `AppBar`
- [ ] Run `npm install` and `npm run dev` to verify the shell loads

## Optional cleanup

- [ ] Remove unused folders under `src/components/` you will not need
- [ ] Add routes under `app/` for your product areas
- [ ] Connect `AppBar` `onMenuClick` when you add mobile navigation

## Design

- [ ] Read `DESIGN.md` before styling new UI
- [ ] Use `styles/tokens.css` variables only (flag missing tokens instead of inventing values)
- [ ] For product pages, follow `rules/product-page.md`
