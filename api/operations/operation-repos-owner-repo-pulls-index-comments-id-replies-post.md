# Reply to a pull request review comment

`POST /repos/{owner}/{repo}/pulls/{index}/comments/{id}/replies`

Authentication (security requirement alternatives):

```json
[
  {
    "BasicAuth": []
  },
  {
    "Token": []
  },
  {
    "AccessToken": []
  },
  {
    "AuthorizationHeaderToken": []
  },
  {
    "SudoParam": []
  },
  {
    "SudoHeader": []
  },
  {
    "TOTPHeader": []
  }
]
```

- BasicAuth: http (basic)
- Token: apiKey, query token. This authentication option is deprecated for removal in Gitea 1.23. Please use AuthorizationHeaderToken instead.
- AccessToken: apiKey, query access_token. This authentication option is deprecated for removal in Gitea 1.23. Please use AuthorizationHeaderToken instead.
- AuthorizationHeaderToken: apiKey, header Authorization. API tokens must be prepended with "token" followed by a space.
- SudoParam: apiKey, query sudo. Sudo API request as the user provided as the key. Admin privileges are required.
- SudoHeader: apiKey, header Sudo. Sudo API request as the user provided as the key. Admin privileges are required.
- TOTPHeader: apiKey, header X-GITEA-OTP. Must be used in combination with BasicAuth if two-factor authentication is enabled.

Parameters:

- `owner` (path, string, required) - owner of the repo
  Type: string

- `repo` (path, string, required) - name of the repo
  Type: string

- `index` (path, integer, int64, required) - index of the pull request
  Type: integer, int64

- `id` (path, integer, int64, required) - id of the review comment to reply to
  Type: integer, int64

Request body: application/json (required)

Type: CreatePullReviewCommentReplyOptions

CreatePullReviewCommentReplyOptions are options to reply to a pull request review comment

Schema: [CreatePullReviewCommentReplyOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullreviewcommentreplyoptions.md)

- `body` (optional)
  Type: string

Responses:

- 201: PullComment

Content type: application/json

Type: PullReviewComment

PullReviewComment represents a comment on a pull request review

Schema: [PullReviewComment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullreviewcomment.md)

- `body` (optional)
  Type: string

- `commit_id` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `diff_hunk` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `original_commit_id` (optional)
  Type: string

- `original_position` (optional)
  Type: integer, uint64

- `path` (optional)
  Type: string

- `position` (optional)
  Type: integer, uint64

- `pull_request_review_id` (optional)
  Type: integer, int64

- `pull_request_url` (optional)
  Type: string, uri

- `resolver` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `updated_at` (optional)
  Type: string, date-time

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 400: APIValidationError is error format response related to input validation

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/comments/0/replies' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "body": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "body": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/comments/0/replies', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    'Content-Type': 'application/json',
  },
  body,
});

const data = await response.text();
```

### Python

```python
import requests

body = '''{
  "body": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/comments/0/replies',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
