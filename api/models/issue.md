# Issue

Type: Issue

Issue represents an issue in a repository

Schema: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `assignee` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `assignees` (optional)
  Type: Array<User>
  
  Items:
    Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
    
    User represents a user

- `body` (optional)
  Type: string

- `closed_at` (optional)
  Type: string, date-time

- `comments` (optional)
  Type: integer, int64

- `content_version` (optional)
  Type: integer, int64
  
  The version of the issue content for optimistic locking

- `created_at` (optional)
  Type: string, date-time

- `due_date` (optional)
  Type: string, date-time

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `is_locked` (optional)
  Type: boolean

- `labels` (optional)
  Type: Array<Label>
  
  Items:
    Reference: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md); Type: Label
    
    Label a label to an issue or a pr

- `milestone` (optional)
  Reference: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md); Type: Milestone
  
  Milestone milestone is a collection of issues on one repository

- `number` (optional)
  Type: integer, int64

- `original_author` (optional)
  Type: string

- `original_author_id` (optional)
  Type: integer, int64

- `pin_order` (optional)
  Type: integer, int64

- `projects` (optional)
  Type: Array<Project>
  
  Items:
    Reference: [Project](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/project.md); Type: Project
    
    Projects track issues and pull requests, standalone note cards are not supported.

- `pull_request` (optional)
  Reference: [PullRequestMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullrequestmeta.md); Type: PullRequestMeta
  
  PullRequestMeta PR info if an issue is a PR

- `ref` (optional)
  Type: string

- `repository` (optional)
  Reference: [RepositoryMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repositorymeta.md); Type: RepositoryMeta
  
  RepositoryMeta basic repository information

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `time_estimate` (optional)
  Type: integer, int64

- `title` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user