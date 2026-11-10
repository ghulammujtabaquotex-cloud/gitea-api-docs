# PayloadCommit

Type: PayloadCommit

PayloadCommit represents a commit

Schema: [PayloadCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommit.md)

- `added` (optional)
  Type: Array<string>
  
  List of files added in this commit
  
  Items:
    Type: string

- `author` (optional)
  Reference: [PayloadUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloaduser.md); Type: PayloadUser
  
  PayloadUser represents the author or committer of a commit

- `committer` (optional)
  Reference: [PayloadUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloaduser.md); Type: PayloadUser
  
  PayloadUser represents the author or committer of a commit

- `id` (optional)
  Type: string
  
  sha1 hash of the commit

- `message` (optional)
  Type: string
  
  The commit message

- `modified` (optional)
  Type: Array<string>
  
  List of files modified in this commit
  
  Items:
    Type: string

- `removed` (optional)
  Type: Array<string>
  
  List of files removed in this commit
  
  Items:
    Type: string

- `timestamp` (optional)
  Type: string, date-time
  
  The timestamp when the commit was made

- `url` (optional)
  Type: string, uri
  
  The URL to view this commit

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit