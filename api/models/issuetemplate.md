# IssueTemplate

Type: IssueTemplate

IssueTemplate represents an issue template for a repository

Schema: [IssueTemplate](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issuetemplate.md)

- `about` (optional)
  Type: string

- `assignees` (optional)
  Reference: [IssueTemplateStringSlice](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issuetemplatestringslice.md); Type: Array<string>

- `body` (optional)
  Type: Array<IssueFormField>
  
  Items:
    Reference: [IssueFormField](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issueformfield.md); Type: IssueFormField
    
    IssueFormField represents a form field

- `content` (optional)
  Type: string

- `file_name` (optional)
  Type: string

- `labels` (optional)
  Reference: [IssueTemplateStringSlice](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issuetemplatestringslice.md); Type: Array<string>

- `name` (optional)
  Type: string

- `ref` (optional)
  Type: string

- `title` (optional)
  Type: string