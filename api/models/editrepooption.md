# EditRepoOption

Type: EditRepoOption

EditRepoOption options when editing a repository's properties

Schema: [EditRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editrepooption.md)

- `allow_fast_forward_only_merge` (optional)
  Type: boolean
  
  either `true` to allow fast-forward-only merging pull requests, or `false` to prevent fast-forward-only merging.

- `allow_manual_merge` (optional)
  Type: boolean
  
  either `true` to allow mark pr as merged manually, or `false` to prevent it.

- `allow_merge_commits` (optional)
  Type: boolean
  
  either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.

- `allow_merge_update` (optional)
  Type: boolean
  
  either `true` to allow updating pull request branch by merge, or `false` to prevent it.

- `allow_rebase` (optional)
  Type: boolean
  
  either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.

- `allow_rebase_explicit` (optional)
  Type: boolean
  
  either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits.

- `allow_rebase_update` (optional)
  Type: boolean
  
  either `true` to allow updating pull request branch by rebase, or `false` to prevent it.

- `allow_squash_merge` (optional)
  Type: boolean
  
  either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.

- `archived` (optional)
  Type: boolean
  
  set to `true` to archive this repository.

- `autodetect_manual_merge` (optional)
  Type: boolean
  
  either `true` to enable AutodetectManualMerge, or `false` to prevent it. Note: In some special cases, misjudgments can occur.

- `default_allow_maintainer_edit` (optional)
  Type: boolean
  
  set to `true` to allow edits from maintainers by default

- `default_branch` (optional)
  Type: string
  
  sets the default branch for this repository.

- `default_delete_branch_after_merge` (optional)
  Type: boolean
  
  set to `true` to delete pr branch after merge by default

- `default_merge_style` (optional)
  Type: string
  
  set to a merge style to be used by this repository: "merge", "rebase", "rebase-merge", "squash", or "fast-forward-only".

- `default_update_style` (optional)
  Type: string
  
  set to an update style to be used by this repository: "merge" or "rebase".

- `description` (optional)
  Type: string
  
  a short description of the repository.

- `enable_prune` (optional)
  Type: boolean
  
  enable prune - remove obsolete remote-tracking references when mirroring

- `external_tracker` (optional)
  Reference: [ExternalTracker](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/externaltracker.md); Type: ExternalTracker
  
  ExternalTracker represents settings for external tracker

- `external_wiki` (optional)
  Reference: [ExternalWiki](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/externalwiki.md); Type: ExternalWiki
  
  ExternalWiki represents setting for external wiki

- `has_actions` (optional)
  Type: boolean
  
  either `true` to enable actions unit, or `false` to disable them.

- `has_code` (optional)
  Type: boolean
  
  either `true` to enable code for this repository or `false` to disable it.

- `has_issues` (optional)
  Type: boolean
  
  either `true` to enable issues for this repository or `false` to disable them.

- `has_packages` (optional)
  Type: boolean
  
  either `true` to enable packages unit, or `false` to disable them.

- `has_projects` (optional)
  Type: boolean
  
  either `true` to enable project unit, or `false` to disable them.

- `has_pull_requests` (optional)
  Type: boolean
  
  either `true` to allow pull requests, or `false` to prevent pull request.

- `has_releases` (optional)
  Type: boolean
  
  either `true` to enable releases unit, or `false` to disable them.

- `has_wiki` (optional)
  Type: boolean
  
  either `true` to enable the wiki for this repository or `false` to disable it.

- `ignore_whitespace_conflicts` (optional)
  Type: boolean
  
  either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace.

- `internal_tracker` (optional)
  Reference: [InternalTracker](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/internaltracker.md); Type: InternalTracker
  
  InternalTracker represents settings for internal tracker

- `mirror_interval` (optional)
  Type: string
  
  set to a string like `8h30m0s` to set the mirror interval time

- `mirror_password` (optional)
  Type: string
  
  authentication password for the remote repository (mirrors)

- `mirror_token` (optional)
  Type: string
  
  authentication token for the remote repository (mirrors)

- `mirror_username` (optional)
  Type: string
  
  authentication username for the remote repository (mirrors)

- `name` (optional)
  Type: string
  
  name of the repository
  
  uniqueItems: true

- `private` (optional)
  Type: boolean
  
  either `true` to make the repository private or `false` to make it public.
  Note: you will get a 422 error if the organization restricts changing repository visibility to organization
  owners and a non-owner tries to change the value of private.

- `projects_mode` (optional)
  Type: string
  
  `repo` to only allow repo-level projects, `owner` to only allow owner projects, `all` to allow both.

- `template` (optional)
  Type: boolean
  
  either `true` to make this repository a template or `false` to make it a normal repository

- `website` (optional)
  Type: string
  
  a URL with more information about the repository.