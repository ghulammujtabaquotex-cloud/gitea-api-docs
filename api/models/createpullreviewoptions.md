# CreatePullReviewOptions

Type: CreatePullReviewOptions

CreatePullReviewOptions are options to create a pull request review

Schema: [CreatePullReviewOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullreviewoptions.md)

- `body` (optional)
  Type: string

- `comments` (optional)
  Type: Array<CreatePullReviewComment>
  
  Items:
    Reference: [CreatePullReviewComment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullreviewcomment.md); Type: CreatePullReviewComment
    
    CreatePullReviewComment represent a review comment for creation api

- `commit_id` (optional)
  Type: string

- `event` (optional)
  Reference: [ReviewStateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/reviewstatetype.md); Type: ReviewStateType
  
  enum: ["APPROVED","PENDING","COMMENT","REQUEST_CHANGES","REQUEST_REVIEW"]