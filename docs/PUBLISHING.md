# Publishing to GitHub Packages

These steps require your GitHub account — they cannot be automated without your credentials.

## One-time setup

1. **Package scope** — This repo publishes as `@mechaghidora/webmdone-design-system`. The `@mechaghidora` scope must match the GitHub user or org that owns the repository.

2. **Repository secret (CI publish)** — In GitHub → Settings → Secrets and variables → Actions, add:
   - `NODE_AUTH_TOKEN`: a PAT with `write:packages` and `read:packages` (or rely on `GITHUB_TOKEN` with `packages: write` permission in the workflow).

3. **Local publish auth** — Create or edit `~/.npmrc`:

```ini
@mechaghidora:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Copy [.npmrc.example](../.npmrc.example) as a starting point (never commit real tokens).

## Publish via GitHub Actions

1. Bump `version` in [package.json](../package.json).
2. Push to `main` or run the **Publish Package** workflow manually (Actions → Publish Package → Run workflow).

The workflow runs `npm run build` then `npm publish`.

## Publish locally

```bash
npm run build
npm publish
```

## Install in another project

See [README.md](../README.md#install-github-packages).

## Troubleshooting

| Error | Fix |
|-------|-----|
| `403 Forbidden` on publish | PAT needs `write:packages`; scope must match repo owner |
| `404` on install | Consumer `.npmrc` must point `@mechaghidora` at GitHub Packages |
| Module not found in Next.js | Add `transpilePackages: ['@mechaghidora/webmdone-design-system']` |
