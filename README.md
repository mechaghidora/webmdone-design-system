# WebMD Project Template

Lean **Next.js app template** (AppBar + Footer shell + blank home page) plus a full **Storybook** catalog for tokens and MUI components. Use the app for product work; use Storybook as the design-system reference.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see the AppBar at the top, Footer at the bottom, and an empty main content area between them.

## App shell

Every route uses [`AppShell`](src/components/layout/AppShell.tsx):

| Zone | Component | Your code |
|------|-----------|-----------|
| Top | AppBar | Fixed in shell (customize in `AppShell` if needed) |
| Middle | `<main>` | `app/**/page.tsx` content |
| Bottom | Footer | Fixed in shell (customize in `AppShell` if needed) |

New routes under `app/` automatically get the full shell — no per-page AppBar or Footer required.

### Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) for token swatches and MUI component stories (`Tokens/*`, `MUI/*`).

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router pages and layouts |
| `app/layout.tsx` | Root layout: tokens, Lato font, MUI providers, `AppShell` |
| `src/components/app-bar/` | Shared AppBar component |
| `src/components/footer/` | Shared Footer component |
| `src/components/layout/` | `AppShell`, `PageSection`, `HeroSection` |
| `src/components/` | Design-system components (Button, Card, Tabs, etc.) |
| `styles/tokens.css` | CSS design tokens (`--color-*`, `--space-*`, …) |
| `styles/mui-theme.ts` | MUI theme aligned with tokens |
| `stories/` | Storybook stories (tokens + MUI components) |
| `.storybook/` | Storybook config |
| `DESIGN.md` | Design system rules |
| `rules/product-page.md` | Product page layout (tabs → hero → sections) |

Page content renders inside `AppShell`’s `<main>` between the AppBar and Footer.

## Building pages

1. Edit `app/page.tsx` or add routes (e.g. `app/about/page.tsx`).
2. Use tokens from `styles/tokens.css` in `sx` props — see `DESIGN.md`.
3. Import components from `@/components/*`.
4. For product-style pages, follow `rules/product-page.md` (app shell is already applied globally).

## Customize the AppBar

Default logo: `public/better-yourself-logo.png`. Override in `AppShell` or pass props if you extend `AppBar`:

```tsx
<AppBar logoSrc="/your-logo.png" logoAlt="Your product" position="sticky" />
```

Wire `onMenuClick` when you add a navigation drawer.

## Use as a GitHub template

1. In your GitHub repo **Settings**, enable **Template repository**.
2. Click **Use this template** → **Create a new repository**.
3. After clone: update `name` in `package.json`, replace `public/` logo if needed, rename `metadata` in `app/layout.tsx`.

See [TEMPLATE.md](./TEMPLATE.md) for a short post-clone checklist.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run storybook` | Storybook dev server |
| `npm run build-storybook` | Static Storybook build (output in `storybook-static/`, gitignored) |

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [MUI](https://mui.com/) 9 + Emotion
- [Storybook](https://storybook.js.org/) 10
- TypeScript
