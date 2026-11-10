# TrackedTime

Type: TrackedTime

TrackedTime worked time for an issue / pr

Schema: [TrackedTime](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/trackedtime.md)

- `created` (optional)
  Type: string, date-time

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the tracked time entry

- `issue` (optional)
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- `issue_id` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility)
  
  deprecated: true

- `time` (optional)
  Type: integer, int64
  
  Time in seconds

- `user_id` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility)
  
  deprecated: true

- `user_name` (optional)
  Type: string
  
  username of the user