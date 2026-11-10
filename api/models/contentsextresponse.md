# ContentsExtResponse

Type: ContentsExtResponse

Schema: [ContentsExtResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsextresponse.md)

- `dir_contents` (optional)
  Type: Array<ContentsResponse>
  
  DirContents contains directory listing when the path represents a directory
  
  Items:
    Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
    
    ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- `file_contents` (optional)
  Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
  
  ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content