# FileCommitResponse

Type: FileCommitResponse

Schema: [FileCommitResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filecommitresponse.md)

- `author` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `committer` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `created` (optional)
  Type: string, date-time
  
  Created is the time when the commit was created

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing this commit

- `message` (optional)
  Type: string
  
  Message is the commit message

- `parents` (optional)
  Type: Array<CommitMeta>
  
  Parents contains parent commit metadata
  
  Items:
    Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `sha` (optional)
  Type: string
  
  SHA is the commit SHA hash

- `tree` (optional)
  Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for the commit