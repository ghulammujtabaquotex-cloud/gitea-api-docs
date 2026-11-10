# FileResponse

Type: FileResponse

FileResponse contains information about a repo's file

Schema: [FileResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/fileresponse.md)

- `commit` (optional)
  Reference: [FileCommitResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filecommitresponse.md); Type: FileCommitResponse

- `content` (optional)
  Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
  
  ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit