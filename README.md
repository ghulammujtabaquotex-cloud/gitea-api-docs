# Gitea API reference (Sourcey)

A navigable [Sourcey](https://sourcey.com) documentation site for the
[Gitea](https://github.com/go-gitea/gitea) REST API, generated from Gitea's own
OpenAPI description at a pinned commit.

- **Live site:** https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/
- **Source repo:** [go-gitea/gitea](https://github.com/go-gitea/gitea)
- **Pinned commit:** `4f5a3e13e5f3aca85d830e3a9024c893b0bbf1e1` (release tag `v28.3.0`)
- **Spec file:** `templates/swagger/v1-openapi3.generated.json` (OpenAPI 3.0.3)
- **License of the documented project:** MIT

## What is here

- `sourcey.config.ts` — the Sourcey configuration (a `markdown()` guide tab plus an
  `openapi()` reference tab).
- `gitea-openapi.json` — the pinned upstream OpenAPI description.
- `docs/` — the guide pages, including a coverage summary and a list of concrete
  gaps found in the upstream description.
- `dist/` — the built static site (also published to the `gh-pages` branch).

## Build

```bash
npm install
npx sourcey build -o dist
```

The build produces 776 pages, covering 537 API operations and 234 schemas.
