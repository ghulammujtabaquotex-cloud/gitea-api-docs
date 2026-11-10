# GitTreeResponse

Type: GitTreeResponse

GitTreeResponse returns a git tree

Schema: [GitTreeResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gittreeresponse.md)

- `page` (optional)
  Type: integer, int64
  
  Page is the current page number for pagination

- `sha` (optional)
  Type: string
  
  SHA is the tree object SHA

- `total_count` (optional)
  Type: integer, int64
  
  TotalCount is the total number of entries in the tree

- `tree` (optional)
  Type: Array<GitEntry>
  
  Entries contains the tree entries (files and directories)
  
  Items:
    Reference: [GitEntry](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gitentry.md); Type: GitEntry
    
    GitEntry represents a git tree

- `truncated` (optional)
  Type: boolean
  
  Truncated indicates if the response was truncated due to size

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this tree