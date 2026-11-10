# GitEntry

Type: GitEntry

GitEntry represents a git tree

Schema: [GitEntry](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gitentry.md)

- `mode` (optional)
  Type: string
  
  Mode is the file mode (permissions)

- `path` (optional)
  Type: string
  
  Path is the file or directory path

- `sha` (optional)
  Type: string
  
  SHA is the Git object SHA

- `size` (optional)
  Type: integer, int64
  
  Size is the file size in bytes

- `type` (optional)
  Type: string
  
  Type indicates if this is a file, directory, or symlink

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this tree entry