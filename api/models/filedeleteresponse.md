# FileDeleteResponse

Type: FileDeleteResponse

FileDeleteResponse contains information about a repo's file that was deleted

Schema: [FileDeleteResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filedeleteresponse.md)

- `commit` (optional)
  Reference: [FileCommitResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filecommitresponse.md); Type: FileCommitResponse

- `content` (optional)
  Type: any
  
  Content is always null for delete operations

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit