# MigrateRepoOptions

Type: MigrateRepoOptions

MigrateRepoOptions options for migrating repository's
this is used to interact with api v1

Schema: [MigrateRepoOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/migraterepooptions.md)

- `auth_password` (optional)
  Type: string

- `auth_token` (optional)
  Type: string

- `auth_username` (optional)
  Type: string

- `aws_access_key_id` (optional)
  Type: string

- `aws_secret_access_key` (optional)
  Type: string

- `clone_addr` (required)
  Type: string

- `description` (optional)
  Type: string

- `issues` (optional)
  Type: boolean

- `labels` (optional)
  Type: boolean

- `lfs` (optional)
  Type: boolean

- `lfs_endpoint` (optional)
  Type: string

- `milestones` (optional)
  Type: boolean

- `mirror` (optional)
  Type: boolean

- `mirror_interval` (optional)
  Type: string

- `private` (optional)
  Type: boolean

- `pull_requests` (optional)
  Type: boolean

- `releases` (optional)
  Type: boolean

- `repo_name` (required)
  Type: string

- `repo_owner` (optional)
  Type: string
  
  the organization's name or individual user's name who will own the migrated repository

- `service` (optional)
  Type: string
  
  enum: ["git","github","gitea","gitlab","gogs","onedev","gitbucket","codebase","codecommit"]

- `uid` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility, use repo_owner instead)
  
  deprecated: true

- `wiki` (optional)
  Type: boolean