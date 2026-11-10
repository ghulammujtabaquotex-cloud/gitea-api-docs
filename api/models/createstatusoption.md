# CreateStatusOption

Type: CreateStatusOption

CreateStatusOption holds the information needed to create a new CommitStatus for a Commit

Schema: [CreateStatusOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createstatusoption.md)

- `context` (optional)
  Type: string
  
  Context is the unique context identifier for the status

- `description` (optional)
  Type: string
  
  Description provides a brief description of the status

- `state` (optional)
  Type: CommitStatusState
  
  State represents the status state to set (pending, success, error, failure)
  
  allOf:
    Reference: [CommitStatusState](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatusstate.md); Type: CommitStatusState
    
    enum: ["pending","success","error","failure","warning","skipped"]

- `target_url` (optional)
  Type: string, uri
  
  TargetURL is the URL to link to for more details