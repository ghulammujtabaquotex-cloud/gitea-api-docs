# Commit

Type: Commit

Schema: [Commit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commit.md)

- `author` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `commit` (optional)
  Reference: [RepoCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repocommit.md); Type: RepoCommit

- `committer` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `created` (optional)
  Type: string, date-time
  
  Created is the time when the commit was created

- `files` (optional)
  Type: Array<CommitAffectedFiles>
  
  Files contains information about files affected by the commit
  
  Items:
    Reference: [CommitAffectedFiles](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitaffectedfiles.md); Type: CommitAffectedFiles
    
    CommitAffectedFiles store information about files affected by the commit

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the commit

- `parents` (optional)
  Type: Array<CommitMeta>
  
  Parents contains the parent commit information
  
  Items:
    Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `sha` (optional)
  Type: string
  
  SHA is the commit SHA hash

- `stats` (optional)
  Reference: [CommitStats](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstats.md); Type: CommitStats
  
  CommitStats is statistics for a RepoCommit

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for the commit