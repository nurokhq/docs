# Nurok Docs

Public documentation for Nurok, served at **[docs.nurok.ai](https://docs.nurok.ai)**.

Built with [Docusaurus](https://docusaurus.io) 3.10 and styled with
[Loam](https://github.com/nurokhq/typescript/blob/main/playbook/domains/design.md),
Nurok's design system.

## Local setup

Requires Node 24 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm start      # dev server on http://localhost:3000 with hot reload
```

Other useful commands:

```bash
pnpm build      # production build into build/
pnpm serve      # serve the production build locally
pnpm typecheck  # type-check docusaurus.config.ts and sidebars.ts
pnpm clear      # clear the Docusaurus cache
```

## Writing docs

Pages are Markdown or MDX files under `docs/`. The sidebar is generated from the folder
structure — use `sidebar_position` in a page's front matter, or a `_category_.json` in a
folder, to control ordering.

Docs serve from the site root rather than `/docs/`, since the domain is already
`docs.nurok.ai`. The page with `slug: /` in its front matter is the site's front page.

`onBrokenLinks` is set to `throw`, so a broken internal link fails the build instead of
shipping.

## Styling

`src/css/custom.css` mirrors the Loam token values as `--loam-*` custom properties and
maps them onto Infima's `--ifm-*` variables. Read tokens through those variables — no
rule should hardcode a hex.

Loam is a light theme and defines no dark palette, so the theme switch is disabled.
Adding dark mode means adding dark tokens to Loam upstream first.

Fonts (Newsreader, Space Grotesk, JetBrains Mono) are self-hosted from `static/fonts/`,
so the site makes no third-party requests. The brand wordmark in `static/img/logo.svg`
is a static export of `packages/ui/src/brand/nurok-logo.tsx` from the `nurokhq/typescript`
repo — regenerate it from that component rather than hand-editing the paths.

## Deployment

Pushes to `main` build and publish to GitHub Pages via
`.github/workflows/deploy.yml`. Pull requests run the same build as a check but do not
deploy. The custom domain is pinned by `static/CNAME`.
