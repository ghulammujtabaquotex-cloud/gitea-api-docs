# Activity

Type: Activity

Schema: [Activity](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/activity.md)

- `act_user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `act_user_id` (optional)
  Type: integer, int64
  
  The ID of the user who performed the action

- `comment` (optional)
  Reference: [Comment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/comment.md); Type: Comment
  
  Comment represents a comment on a commit or issue

- `comment_id` (optional)
  Type: integer, int64
  
  The ID of the comment associated with the activity (if applicable)

- `content` (optional)
  Type: string
  
  Additional content or details about the activity

- `created` (optional)
  Type: string, date-time
  
  The date and time when the activity occurred

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the activity

- `is_private` (optional)
  Type: boolean
  
  Whether this activity is from a private repository

- `op_type` (optional)
  Type: string
  
  the type of action
  
  enum: ["create_repo","rename_repo","star_repo","watch_repo","commit_repo","create_issue","create_pull_request","transfer_repo","push_tag","comment_issue","merge_pull_request","close_issue","reopen_issue","close_pull_request","reopen_pull_request","delete_tag","delete_branch","mirror_sync_push","mirror_sync_create","mirror_sync_delete","approve_pull_request","reject_pull_request","comment_pull","publish_release","pull_review_dismissed","pull_request_ready_for_review","auto_merge_pull_request"]

- `ref_name` (optional)
  Type: string
  
  The name of the git reference (branch/tag) associated with the activity

- `repo` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `repo_id` (optional)
  Type: integer, int64
  
  The ID of the repository associated with the activity

- `user_id` (optional)
  Type: integer, int64
  
  The ID of the user who receives/sees this activity