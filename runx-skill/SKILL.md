---
name: sourcey-docs-build
description: Build a Sourcey documentation site from a pinned OpenAPI description and seal the build as a governed runx receipt.
---

# Sourcey docs build

Run the Sourcey static-site build for the Gitea API reference and seal the run.
The build is executed through the native `command.execute` tool, so the runx
receipt binds the exact command, its exit status and its output digest.

## When to use it

Use this skill to reproduce the published Gitea API reference from
`gitea-openapi.json` and get a signed runx receipt for that build.
