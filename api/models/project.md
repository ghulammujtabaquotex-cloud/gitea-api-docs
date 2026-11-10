# Project

Type: Project

Projects track issues and pull requests, standalone note cards are not supported.

Schema: [Project](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/project.md)

- `card_type` (optional)
  Type: string
  
  Card type: "text_only" or "images_and_text"

- `closed_at` (optional)
  Type: string, date-time

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `creator_id` (optional)
  Type: integer, int64
  
  Deprecated: use Creator instead
  
  deprecated: true

- `description` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `is_closed` (optional)
  Type: boolean
  
  Deprecated: use State instead
  
  deprecated: true

- `num_closed_issues` (optional)
  Type: integer, int64

- `num_issues` (optional)
  Type: integer, int64

- `num_open_issues` (optional)
  Type: integer, int64

- `owner_id` (optional)
  Type: integer, int64

- `repo_id` (optional)
  Type: integer, int64

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `template_type` (optional)
  Type: string
  
  Template type: "none", "basic_kanban" or "bug_triage"

- `title` (optional)
  Type: string

- `type` (optional)
  Type: string
  
  Project type: "individual", "repository" or "organization"

- `updated_at` (optional)
  Type: string, date-time
  
  null only for legacy rows that carry no update timestamp