# ProjectColumn

Type: ProjectColumn

ProjectColumn represents a project column (board)

Schema: [ProjectColumn](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/projectcolumn.md)

- `color` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `default` (optional)
  Type: boolean

- `id` (optional)
  Type: integer, int64

- `project_id` (optional)
  Type: integer, int64

- `sorting` (optional)
  Type: integer, int64

- `title` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time
  
  null only for legacy rows that carry no update timestamp