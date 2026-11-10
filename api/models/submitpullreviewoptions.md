# SubmitPullReviewOptions

Type: SubmitPullReviewOptions

SubmitPullReviewOptions are options to submit a pending pull request review

Schema: [SubmitPullReviewOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/submitpullreviewoptions.md)

- `body` (optional)
  Type: string

- `event` (optional)
  Reference: [ReviewStateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/reviewstatetype.md); Type: ReviewStateType
  
  enum: ["APPROVED","PENDING","COMMENT","REQUEST_CHANGES","REQUEST_REVIEW"]