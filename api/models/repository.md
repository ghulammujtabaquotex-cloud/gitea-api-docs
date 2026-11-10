# Repository

Type: Repository

Repository represents a repository

Schema: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md)

- `allow_fast_forward_only_merge` (optional)
  Type: boolean

- `allow_manual_merge` (optional)
  Type: boolean

- `allow_merge_commits` (optional)
  Type: boolean

- `allow_merge_update` (optional)
  Type: boolean

- `allow_rebase` (optional)
  Type: boolean

- `allow_rebase_explicit` (optional)
  Type: boolean

- `allow_rebase_update` (optional)
  Type: boolean

- `allow_squash_merge` (optional)
  Type: boolean

- `archived` (optional)
  Type: boolean

- `archived_at` (optional)
  Type: string, date-time

- `autodetect_manual_merge` (optional)
  Type: boolean

- `avatar_url` (optional)
  Type: string, uri

- `branch_count` (optional)
  Type: integer, int64

- `clone_url` (optional)
  Type: string, uri

- `created_at` (optional)
  Type: string, date-time

- `default_allow_maintainer_edit` (optional)
  Type: boolean

- `default_branch` (optional)
  Type: string

- `default_delete_branch_after_merge` (optional)
  Type: boolean

- `default_merge_style` (optional)
  Type: string

- `default_target_branch` (optional)
  Type: string

- `default_update_style` (optional)
  Type: string

- `description` (optional)
  Type: string

- `empty` (optional)
  Type: boolean

- `external_tracker` (optional)
  Reference: [ExternalTracker](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/externaltracker.md); Type: ExternalTracker
  
  ExternalTracker represents settings for external tracker

- `external_wiki` (optional)
  Reference: [ExternalWiki](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/externalwiki.md); Type: ExternalWiki
  
  ExternalWiki represents setting for external wiki

- `fork` (optional)
  Type: boolean

- `forks_count` (optional)
  Type: integer, int64

- `full_name` (optional)
  Type: string

- `has_actions` (optional)
  Type: boolean

- `has_code` (optional)
  Type: boolean

- `has_issues` (optional)
  Type: boolean

- `has_packages` (optional)
  Type: boolean

- `has_projects` (optional)
  Type: boolean

- `has_pull_requests` (optional)
  Type: boolean

- `has_releases` (optional)
  Type: boolean

- `has_wiki` (optional)
  Type: boolean

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `ignore_whitespace_conflicts` (optional)
  Type: boolean

- `internal` (optional)
  Type: boolean

- `internal_tracker` (optional)
  Reference: [InternalTracker](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/internaltracker.md); Type: InternalTracker
  
  InternalTracker represents settings for internal tracker

- `language` (optional)
  Type: string

- `languages_url` (optional)
  Type: string, uri

- `licenses` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `link` (optional)
  Type: string

- `mirror` (optional)
  Type: boolean

- `mirror_interval` (optional)
  Type: string

- `mirror_last_sync_at` (optional)
  Type: string, date-time

- `mirror_updated` (optional)
  Type: string, date-time

- `name` (optional)
  Type: string

- `object_format_name` (optional)
  Type: ObjectFormatName
  
  ObjectFormatName of the underlying git repository
  
  allOf:
    Reference: [ObjectFormatName](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/objectformatname.md); Type: ObjectFormatName
    
    enum: ["sha1","sha256"]

- `open_issues_count` (optional)
  Type: integer, int64

- `open_pr_counter` (optional)
  Type: integer, int64

- `original_url` (optional)
  Type: string, uri

- `owner` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `parent` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository

- `permissions` (optional)
  Reference: [Permission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/permission.md); Type: Permission
  
  Permission represents a set of permissions

- `private` (optional)
  Type: boolean

- `projects_mode` (optional)
  Type: string

- `release_counter` (optional)
  Type: integer, int64

- `repo_transfer` (optional)
  Reference: [RepoTransfer](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repotransfer.md); Type: RepoTransfer
  
  RepoTransfer represents a pending repo transfer

- `size` (optional)
  Type: integer, int64

- `ssh_url` (optional)
  Type: string, uri

- `stars_count` (optional)
  Type: integer, int64

- `template` (optional)
  Type: boolean

- `topics` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri

- `watchers_count` (optional)
  Type: integer, int64

- `website` (optional)
  Type: string