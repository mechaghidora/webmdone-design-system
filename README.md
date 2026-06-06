# WebMD ONE Design System

Publishable React component library (MUI + design tokens) for Next.js apps. Storybook is the local reference catalog.

## Install (GitHub Packages)

1. Create a GitHub PAT with `read:packages` scope.

2. Add to your consumer app (project root or `~/.npmrc`):

```ini
@mechaghidora:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

3. Install:

```bash
npm install @mechaghidora/webmdone-design-system
```

## Use in a Next.js app

```tsx
// app/layout.tsx
import "@mechaghidora/webmdone-design-system/styles/tokens.css";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@mechaghidora/webmdone-design-system/styles";

import { Button } from "@mechaghidora/webmdone-design-system";
// or subpath import:
// import { Button } from "@mechaghidora/webmdone-design-system/button";
```

If you hit transpilation issues, add to `next.config.ts`:

```ts
const nextConfig = {
  transpilePackages: ["@mechaghidora/webmdone-design-system"],
};
```

### Peer dependencies

Your app must provide: `react`, `react-dom`, `next`, `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`.

## Package exports

| Import path | Contents |
|-------------|----------|
| `@mechaghidora/webmdone-design-system` | All components (barrel) |
| `@mechaghidora/webmdone-design-system/button` | Button only |
| `@mechaghidora/webmdone-design-system/styles` | `muiTheme`, `createAppTheme` |
| `@mechaghidora/webmdone-design-system/styles/tokens.css` | CSS custom properties |

See `package.json` `exports` for the full subpath list.

## Develop this repo

```bash
npm install
npm run storybook    # http://localhost:6006
npm run build        # compile to dist/
npm run pack:dry-run # preview publish tarball
```

## Publish (maintainers)

See [docs/PUBLISHING.md](docs/PUBLISHING.md).
