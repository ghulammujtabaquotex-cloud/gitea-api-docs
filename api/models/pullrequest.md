# PullRequest

Type: PullRequest

PullRequest represents a pull request

Schema: [PullRequest](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullrequest.md)

- `additions` (optional)
  Type: integer, int64
  
  The number of lines added in the pull request

- `allow_maintainer_edit` (optional)
  Type: boolean
  
  Whether maintainers can edit the pull request

- `assignee` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `assignees` (optional)
  Type: Array<User>
  
  The list of users assigned to the pull request
  
  Items:
    Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
    
    User represents a user

- `base` (optional)
  Reference: [PRBranchInfo](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/prbranchinfo.md); Type: PRBranchInfo
  
  PRBranchInfo information about a branch

- `body` (optional)
  Type: string
  
  The description body of the pull request

- `changed_files` (optional)
  Type: integer, int64
  
  The number of files changed in the pull request

- `closed_at` (optional)
  Type: string, date-time

- `comments` (optional)
  Type: integer, int64
  
  The number of comments on the pull request

- `content_version` (optional)
  Type: integer, int64
  
  The version of the pull request content for optimistic locking

- `created_at` (optional)
  Type: string, date-time

- `deletions` (optional)
  Type: integer, int64
  
  The number of lines deleted in the pull request

- `diff_url` (optional)
  Type: string, uri
  
  The URL to download the diff patch

- `draft` (optional)
  Type: boolean
  
  Whether the pull request is a draft

- `due_date` (optional)
  Type: string, date-time

- `head` (optional)
  Reference: [PRBranchInfo](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/prbranchinfo.md); Type: PRBranchInfo
  
  PRBranchInfo information about a branch

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the pull request

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the pull request

- `is_locked` (optional)
  Type: boolean
  
  Whether the pull request conversation is locked

- `labels` (optional)
  Type: Array<Label>
  
  The labels attached to the pull request
  
  Items:
    Reference: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md); Type: Label
    
    Label a label to an issue or a pr

- `merge_base` (optional)
  Type: string
  
  The merge base commit SHA

- `merge_commit_sha` (optional)
  Type: string
  
  The SHA of the merge commit

- `mergeable` (optional)
  Type: boolean
  
  Whether the pull request can be merged

- `merged` (optional)
  Type: boolean
  
  Whether the pull request has been merged

- `merged_at` (optional)
  Type: string, date-time

- `merged_by` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `milestone` (optional)
  Reference: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md); Type: Milestone
  
  Milestone milestone is a collection of issues on one repository

- `number` (optional)
  Type: integer, int64
  
  The pull request number

- `patch_url` (optional)
  Type: string, uri
  
  The URL to download the patch file

- `pin_order` (optional)
  Type: integer, int64
  
  The pin order for the pull request

- `requested_reviewers` (optional)
  Type: Array<User>
  
  The users requested to review the pull request
  
  Items:
    Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
    
    User represents a user

- `requested_reviewers_teams` (optional)
  Type: Array<Team>
  
  The teams requested to review the pull request
  
  Items:
    Reference: [Team](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/team.md); Type: Team
    
    Team represents a team in an organization

- `review_comments` (optional)
  Type: integer, int64
  
  number of review comments made on the diff of a PR review (not including comments on commits or issues in a PR)

- `state` (optional)
  Type: StateType
  
  The current state of the pull request
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  The title of the pull request

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri
  
  The API URL of the pull request

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user