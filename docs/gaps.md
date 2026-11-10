---
title: Known gaps
description: Concrete, maintainer-facing gaps found in the pinned Gitea OpenAPI description, each reproducible from the file.
---

# Known gaps

These are real gaps in the pinned description
(`templates/swagger/v1-openapi3.generated.json` at
`4f5a3e13e5f3aca85d830e3a9024c893b0bbf1e1`). Each one is reproducible from the
file; the counts were produced with a small JSON script over the spec. They are
listed here because a generated reference can only be as complete as its source.

- **Most operations have no `description`.** 516 of 537 operations (about 96%)
  carry a `summary` but no `description`. For example `GET /repos/{owner}/{repo}`
  has `summary: "Get a repository"` and no `description`; `GET /admin/cron` has
  `summary: "List cron tasks"` and no `description`. A one-line summary is enough
  to label a page, but not to explain scopes, pagination or side effects.

- **Error responses are often undocumented.** 55 of 537 operations declare no
  `4xx` or `5xx` response at all. Clients generated from the spec therefore have
  no typed error surface for those endpoints, even though Gitea returns structured
  API errors in practice.

- **Some schemas are undocumented.** 36 of the 234 reusable schemas in
  `components.schemas` have no `description`, so a reader sees a field list with
  no prose about what the object represents.

- **One security scheme has no description.** Of the seven schemes, `BasicAuth`
  is the only one without a `description`; the other six explain their usage.

- **The `version` field is a build placeholder.** `info.version` is
  `0.0.0+GITEA-API-APP-VERSION`. Because the version is substituted at build time,
  a spec taken from a source tree does not carry the real release number, which
  makes it hard to tell which API version a downloaded file describes.

- **The `servers` URL is a placeholder.** `servers[0].url` is
  `/GITEA-API-APP-SUBURL/api/v1`. Code generators that trust `servers` will emit a
  base path that no real instance uses; a pinned instance URL or a documented
  `{suburl}` variable would make generated clients usable without editing.

- **Deprecated operations carry no migration note.** Four operations are marked
  `deprecated` (for example `POST /org/{org}/repos` and the issue-comment
  `DELETE`/`PATCH` pair), but none of them points at a replacement, so a reader
  cannot tell what to migrate to.

- **There is no `externalDocs` link.** The description has no top-level
  `externalDocs`, so there is no in-spec pointer to the human Gitea API guide for
  the concepts the reference leaves out.

## What is in good shape

- Every operation has a stable `operationId` and a `summary` (0 missing).
- Every non-path parameter has a `description` (0 missing).
- All nine tag groups are declared with a description.
- The file is valid OpenAPI 3.0.3 and parses cleanly.
