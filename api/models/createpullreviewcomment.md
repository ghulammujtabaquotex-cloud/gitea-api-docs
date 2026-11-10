# CreatePullReviewComment

Type: CreatePullReviewComment

CreatePullReviewComment represent a review comment for creation api

Schema: [CreatePullReviewComment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullreviewcomment.md)

- `body` (optional)
  Type: string

- `new_position` (optional)
  Type: integer, int64
  
  if comment to new file line or 0

- `old_position` (optional)
  Type: integer, int64
  
  if comment to old file line or 0

- `path` (optional)
  Type: string
  
  the tree path