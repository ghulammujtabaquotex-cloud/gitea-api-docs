# TimelineComment

Type: TimelineComment

TimelineComment represents a timeline comment (comment of any type) on a commit or issue

Schema: [TimelineComment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/timelinecomment.md)

- `assignee` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `assignee_team` (optional)
  Reference: [Team](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/team.md); Type: Team
  
  Team represents a team in an organization

- `body` (optional)
  Type: string
  
  Body contains the timeline event content

- `created_at` (optional)
  Type: string, date-time

- `dependent_issue` (optional)
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the comment

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the timeline comment

- `issue_url` (optional)
  Type: string, uri
  
  IssueURL is the API URL for the issue

- `label` (optional)
  Reference: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md); Type: Label
  
  Label a label to an issue or a pr

- `milestone` (optional)
  Reference: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md); Type: Milestone
  
  Milestone milestone is a collection of issues on one repository

- `new_ref` (optional)
  Type: string

- `new_title` (optional)
  Type: string

- `old_milestone` (optional)
  Reference: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md); Type: Milestone
  
  Milestone milestone is a collection of issues on one repository

- `old_project_id` (optional)
  Type: integer, int64

- `old_ref` (optional)
  Type: string

- `old_title` (optional)
  Type: string

- `project_id` (optional)
  Type: integer, int64

- `pull_request_url` (optional)
  Type: string, uri
  
  PRURL is the API URL for the pull request (if applicable)

- `ref_action` (optional)
  Type: string

- `ref_comment` (optional)
  Reference: [Comment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/comment.md); Type: Comment
  
  Comment represents a comment on a commit or issue

- `ref_commit_sha` (optional)
  Type: string
  
  commit SHA where issue/PR was referenced

- `ref_issue` (optional)
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- `removed_assignee` (optional)
  Type: boolean
  
  whether the assignees were removed or added

- `resolve_doer` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `review_id` (optional)
  Type: integer, int64

- `tracked_time` (optional)
  Reference: [TrackedTime](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/trackedtime.md); Type: TrackedTime
  
  TrackedTime worked time for an issue / pr

- `type` (optional)
  Type: string
  
  Type indicates the type of timeline event

- `updated_at` (optional)
  Type: string, date-time

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user