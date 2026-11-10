# EditIssueOption

Type: EditIssueOption

EditIssueOption options for editing an issue

Schema: [EditIssueOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editissueoption.md)

- `assignee` (optional)
  Type: string
  
  deprecated
  
  deprecated: true

- `assignees` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `body` (optional)
  Type: string

- `content_version` (optional)
  Type: integer, int64
  
  The current version of the issue content to detect conflicts during editing

- `due_date` (optional)
  Type: string, date-time

- `milestone` (optional)
  Type: integer, int64

- `projects` (optional)
  Type: Array<integer>
  
  list of project ids to set (replaces existing projects)
  
  Items:
    Type: integer, int64

- `ref` (optional)
  Type: string

- `state` (optional)
  Type: string

- `title` (optional)
  Type: string

- `unset_due_date` (optional)
  Type: boolean