# CreatePullRequestOption

Type: CreatePullRequestOption

CreatePullRequestOption options when creating a pull request

Schema: [CreatePullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullrequestoption.md)

- `allow_maintainer_edit` (optional)
  Type: boolean
  
  Whether maintainers can edit the pull request

- `assignee` (optional)
  Type: string
  
  The primary assignee username

- `assignees` (optional)
  Type: Array<string>
  
  The list of assignee usernames
  
  Items:
    Type: string

- `base` (optional)
  Type: string
  
  The base branch for the pull request

- `body` (optional)
  Type: string
  
  The description body of the pull request

- `due_date` (optional)
  Type: string, date-time

- `head` (optional)
  Type: string
  
  The head branch for the pull request, it could be a branch name on the base repository or
  a form like `<username>:<branch>` which refers to the user's fork repository's branch.

- `labels` (optional)
  Type: Array<integer>
  
  The list of label IDs to assign to the pull request
  
  Items:
    Type: integer, int64

- `milestone` (optional)
  Type: integer, int64
  
  The milestone ID to assign to the pull request

- `reviewers` (optional)
  Type: Array<string>
  
  The list of reviewer usernames
  
  Items:
    Type: string

- `team_reviewers` (optional)
  Type: Array<string>
  
  The list of team reviewer names
  
  Items:
    Type: string

- `title` (optional)
  Type: string
  
  The title of the pull request