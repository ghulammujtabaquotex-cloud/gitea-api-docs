# EditPullRequestOption

Type: EditPullRequestOption

EditPullRequestOption options when modify pull request

Schema: [EditPullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editpullrequestoption.md)

- `allow_maintainer_edit` (optional)
  Type: boolean
  
  Whether to allow maintainer edits

- `assignee` (optional)
  Type: string
  
  The new primary assignee username

- `assignees` (optional)
  Type: Array<string>
  
  The new list of assignee usernames
  
  Items:
    Type: string

- `base` (optional)
  Type: string
  
  The new base branch for the pull request

- `body` (optional)
  Type: string
  
  The new description body for the pull request

- `content_version` (optional)
  Type: integer, int64
  
  The current version of the pull request content to detect conflicts during editing

- `due_date` (optional)
  Type: string, date-time

- `labels` (optional)
  Type: Array<integer>
  
  The new list of label IDs for the pull request
  
  Items:
    Type: integer, int64

- `milestone` (optional)
  Type: integer, int64
  
  The new milestone ID for the pull request

- `state` (optional)
  Type: string
  
  The new state for the pull request

- `title` (optional)
  Type: string
  
  The new title for the pull request

- `unset_due_date` (optional)
  Type: boolean
  
  Whether to remove the current deadline