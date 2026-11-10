# GitBlobResponse

Type: GitBlobResponse

GitBlobResponse represents a git blob

Schema: [GitBlobResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gitblobresponse.md)

- `content` (optional)
  Type: string
  
  The content of the git blob (may be base64 encoded)

- `encoding` (optional)
  Type: string
  
  The encoding used for the content (e.g., "base64")

- `lfs_oid` (optional)
  Type: string
  
  The LFS object ID if this blob is stored in LFS

- `lfs_size` (optional)
  Type: integer, int64
  
  The size of the LFS object if this blob is stored in LFS

- `sha` (optional)
  Type: string
  
  The SHA hash of the git blob

- `size` (optional)
  Type: integer, int64
  
  The size of the git blob in bytes

- `url` (optional)
  Type: string, uri
  
  The URL to access this git blob