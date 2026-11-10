# PushMirror

Type: PushMirror

PushMirror represents information of a push mirror

Schema: [PushMirror](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pushmirror.md)

- `created` (optional)
  Type: string, date-time

- `interval` (optional)
  Type: string
  
  The sync interval for automatic updates

- `last_error` (optional)
  Type: string
  
  The last error message encountered during sync

- `last_update` (optional)
  Type: string, date-time

- `remote_address` (optional)
  Type: string
  
  The remote repository URL being mirrored to

- `remote_name` (optional)
  Type: string
  
  The name of the remote in the git configuration

- `repo_name` (optional)
  Type: string
  
  The name of the source repository

- `sync_on_commit` (optional)
  Type: boolean
  
  Whether to sync on every commit