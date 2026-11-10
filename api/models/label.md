# Label

Type: Label

Label a label to an issue or a pr

Schema: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md)

- `color` (optional)
  Type: string
  
  Example:
  
  ```json
  "00aabb"
  ```

- `description` (optional)
  Type: string
  
  Description provides additional context about the label's purpose

- `exclusive` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the label

- `is_archived` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `name` (optional)
  Type: string
  
  Name is the display name of the label

- `url` (optional)
  Type: string, uri
  
  URL is the API endpoint for accessing this label