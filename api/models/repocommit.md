# RepoCommit

Type: RepoCommit

Schema: [RepoCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repocommit.md)

- `author` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `committer` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `message` (optional)
  Type: string
  
  Message is the commit message

- `tree` (optional)
  Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for the commit

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit