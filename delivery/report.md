# Sourcey docs for a maintained OSS library: Gitea

## What was shipped

A live Sourcey-generated documentation site for **go-gitea/gitea**, a maintained
self-hosted Git service (MIT licensed, ~59k stars). The site is built from
Gitea's own OpenAPI description at a pinned commit, not from hand-written pages.

- Public site: https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/
- Source of the build: https://github.com/ghulammujtabaquotex-cloud/gitea-api-docs
- Upstream target: go-gitea/gitea @ `4f5a3e13e5f3aca85d830e3a9024c893b0bbf1e1` (tag `v28.3.0`)
- Adapter: Sourcey `openapi()` over `templates/swagger/v1-openapi3.generated.json` (OpenAPI 3.0.3)

## How it was built and governed

The build ran under a governed runx run, not a bare shell command. The runx
skill `sourcey-docs-build` has a single step that calls the native
`command.execute` tool with scope `process.exec`, running
`npx sourcey build -o dist`. The run sealed with outcome `completed`, exit code
`0`, and stdout `Pages: 776`.

- Receipt: `runx:receipt:sha256:241150dd6927d7ae409d8d0b432dc110b3ee91b3146e66f2ddd8acd20be1102d`
- runx CLI used: `runx-cli 0.11.1` (well above the required 0.6.13)
- Sourcey version: 3.9.5

The receipt is a standard local Ed25519-sealed runx receipt. Its JSON and the
issuer public key are published alongside this report so a reviewer can verify
it independently with `runx verify`.

## Coverage from source

Counted directly from the pinned spec file:

- 342 paths, 537 operations, 9 tag groups
- 234 reusable schemas, 7 security schemes, 4 deprecated operations
- Operations by tag: repository 222, user 93, organization 83, issue 72,
  admin 33, miscellaneous 14, package 9, notification 7, settings 4

The build produced 776 site pages (777 HTML files including the 404 page), of
which 771 are under `api/` — one page per operation plus one per schema.

## Maintainer-facing gaps found in the upstream description

These are the useful part of the exercise: concrete, reproducible gaps in
Gitea's published OpenAPI file, each counted from the file itself. A generated
reference can only be as complete as its source, so the site documents these
rather than hiding them.

1. **Most operations have no `description`.** 516 of 537 operations (about 96%)
   carry a `summary` but no `description`. For example `GET /repos/{owner}/{repo}`
   has `summary: "Get a repository"` and no `description`. A one-line summary
   labels a page but does not explain scopes, pagination or side effects.
2. **Error responses are often undocumented.** 55 of 537 operations declare no
   `4xx` or `5xx` response at all, so generated clients have no typed error
   surface for those endpoints even though Gitea returns structured API errors.
3. **Some schemas are undocumented.** 36 of 234 reusable schemas have no
   `description`.
4. **One security scheme lacks a description.** Of the seven schemes, `BasicAuth`
   is the only one without a `description`.
5. **`info.version` is a build placeholder.** It is
   `0.0.0+GITEA-API-APP-VERSION`, so a spec taken from a source tree does not
   carry the real release number.
6. **`servers` is a build placeholder.** `servers[0].url` is
   `/GITEA-API-APP-SUBURL/api/v1`; code generators that trust it emit a base path
   no real instance uses. A pinned instance URL or a documented `{suburl}`
   variable would fix this.
7. **Deprecated operations carry no migration note.** Four operations are marked
   `deprecated` (for example `POST /org/{org}/repos` and the issue-comment
   `DELETE`/`PATCH` pair) with no pointer to a replacement.
8. **No `externalDocs`.** The description has no top-level `externalDocs`, so
   there is no in-spec link to the human Gitea API guide.

What is already in good shape: every operation has a stable `operationId` and a
`summary` (0 missing), every non-path parameter has a `description` (0 missing),
and all nine tag groups are declared with a description.

## Why this is useful

A maintainer or ecosystem user can link to a navigable reference that matches a
tagged release, and the gap list is directly actionable: it is a work list for
improving Gitea's generated API description, and it shows precisely where the
reference is thin and why.

## Packet

- `public_url` — https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/
- `evidence_json` — https://raw.githubusercontent.com/ghulammujtabaquotex-cloud/gitea-api-docs/main/delivery/evidence.json
- `receipt_ref` — `runx:receipt:sha256:241150dd6927d7ae409d8d0b432dc110b3ee91b3146e66f2ddd8acd20be1102d`
- `report` — this document

_This report was produced by an AI agent (OpenHands) on behalf of the operator._
