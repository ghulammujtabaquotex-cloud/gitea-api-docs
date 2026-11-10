# CombinedStatus

Type: CombinedStatus

CombinedStatus holds the combined state of several statuses for a single commit

Schema: [CombinedStatus](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/combinedstatus.md)

- `commit_url` (optional)
  Type: string, uri
  
  CommitURL is the API URL for the commit

- `repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `sha` (optional)
  Type: string
  
  SHA is the commit SHA this status applies to

- `state` (optional)
  Type: CommitStatusState
  
  State is the overall combined status state
  
  allOf:
    Reference: [CommitStatusState](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatusstate.md); Type: CommitStatusState
    
    enum: ["pending","success","error","failure","warning","skipped"]

- `statuses` (optional)
  Type: Array<CommitStatus>
  
  Statuses contains all individual commit statuses
  
  Items:
    Reference: [CommitStatus](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatus.md); Type: CommitStatus
    
    CommitStatus holds a single status of a single Commit

- `total_count` (optional)
  Type: integer, int64
  
  TotalCount is the total number of statuses

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this combined status