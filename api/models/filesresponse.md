# FilesResponse

Type: FilesResponse

FilesResponse contains information about multiple files from a repo

Schema: [FilesResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filesresponse.md)

- `commit` (optional)
  Reference: [FileCommitResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filecommitresponse.md); Type: FileCommitResponse

- `files` (optional)
  Type: Array<ContentsResponse>
  
  Files contains the list of file contents and metadata
  
  Items:
    Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
    
    ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit