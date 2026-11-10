# PullReview

Type: PullReview

PullReview represents a pull request review

Schema: [PullReview](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullreview.md)

- `body` (optional)
  Type: string

- `comments_count` (optional)
  Type: integer, int64

- `commit_id` (optional)
  Type: string

- `dismissed` (optional)
  Type: boolean

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the review

- `id` (optional)
  Type: integer, int64

- `official` (optional)
  Type: boolean

- `pull_request_url` (optional)
  Type: string, uri
  
  HTMLPullURL is the web URL for the pull request

- `stale` (optional)
  Type: boolean

- `state` (optional)
  Reference: [ReviewStateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/reviewstatetype.md); Type: ReviewStateType
  
  enum: ["APPROVED","PENDING","COMMENT","REQUEST_CHANGES","REQUEST_REVIEW"]

- `submitted_at` (optional)
  Type: string, date-time

- `team` (optional)
  Reference: [Team](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/team.md); Type: Team
  
  Team represents a team in an organization

- `updated_at` (optional)
  Type: string, date-time

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user