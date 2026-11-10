# ChangedFile

Type: ChangedFile

ChangedFile store information about files affected by the pull request

Schema: [ChangedFile](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/changedfile.md)

- `additions` (optional)
  Type: integer, int64
  
  The number of lines added to the file

- `changes` (optional)
  Type: integer, int64
  
  The total number of changes to the file

- `contents_url` (optional)
  Type: string, uri
  
  The API URL to get the file contents

- `deletions` (optional)
  Type: integer, int64
  
  The number of lines deleted from the file

- `filename` (optional)
  Type: string
  
  The name of the changed file

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the file changes

- `previous_filename` (optional)
  Type: string
  
  The previous filename if the file was renamed

- `raw_url` (optional)
  Type: string, uri
  
  The raw URL to download the file

- `status` (optional)
  Type: string
  
  The status of the file change (added, modified, deleted, etc.)