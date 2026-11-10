# CreateIssueOption

Type: CreateIssueOption

CreateIssueOption options to create one issue

Schema: [CreateIssueOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createissueoption.md)

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

- `closed` (optional)
  Type: boolean

- `due_date` (optional)
  Type: string, date-time

- `labels` (optional)
  Type: Array<integer>
  
  list of label ids
  
  Items:
    Type: integer, int64

- `milestone` (optional)
  Type: integer, int64
  
  milestone id

- `projects` (optional)
  Type: Array<integer>
  
  list of project ids
  
  Items:
    Type: integer, int64

- `ref` (optional)
  Type: string

- `title` (required)
  Type: string