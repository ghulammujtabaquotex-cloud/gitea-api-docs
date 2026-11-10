# Cancel to dismiss a review for a pull request

`POST /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals`

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

- `id` (path, integer, int64, required) - id of the review
  Type: integer, int64

Responses:

- 200: PullReview

Content type: application/json

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

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/reviews/0/undismissals' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/reviews/0/undismissals', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/reviews/0/undismissals',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
