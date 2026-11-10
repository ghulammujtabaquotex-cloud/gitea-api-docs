# CommitStatus

Type: CommitStatus

CommitStatus holds a single status of a single Commit

Schema: [CommitStatus](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatus.md)

- `context` (optional)
  Type: string
  
  Context is the unique context identifier for the status

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `description` (optional)
  Type: string
  
  Description provides a brief description of the status

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the commit status

- `status` (optional)
  Type: CommitStatusState
  
  State represents the status state (pending, success, error, failure)
  
  allOf:
    Reference: [CommitStatusState](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatusstate.md); Type: CommitStatusState
    
    enum: ["pending","success","error","failure","warning","skipped"]

- `target_url` (optional)
  Type: string, uri
  
  TargetURL is the URL to link to for more details

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this status