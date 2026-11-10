# Comment

Type: Comment

Comment represents a comment on a commit or issue

Schema: [Comment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/comment.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  Attachments contains files attached to the comment
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `body` (optional)
  Type: string
  
  Body contains the comment text content

- `created_at` (optional)
  Type: string, date-time

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the comment

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the comment

- `issue_url` (optional)
  Type: string, uri
  
  IssueURL is the API URL for the issue

- `original_author` (optional)
  Type: string
  
  OriginalAuthor is the original author name (for imported comments)

- `original_author_id` (optional)
  Type: integer, int64
  
  OriginalAuthorID is the original author ID (for imported comments)

- `pull_request_url` (optional)
  Type: string, uri
  
  PRURL is the API URL for the pull request (if applicable)

- `updated_at` (optional)
  Type: string, date-time

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user