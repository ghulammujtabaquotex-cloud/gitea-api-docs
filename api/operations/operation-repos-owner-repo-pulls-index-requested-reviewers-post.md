# create review requests for a pull request

`POST /repos/{owner}/{repo}/pulls/{index}/requested_reviewers`

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

Request body: application/json (required)

Type: PullReviewRequestOptions

PullReviewRequestOptions are options to add or remove pull request review requests

Schema: [PullReviewRequestOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullreviewrequestoptions.md)

- `reviewers` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `team_reviewers` (optional)
  Type: Array<string>
  
  Items:
    Type: string

Responses:

- 201: PullReviewList

Content type: application/json

Type: Array<PullReview>

Items:
  Reference: [PullReview](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullreview.md); Type: PullReview
  
  PullReview represents a pull request review

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/requested_reviewers' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ]
}'
```

### JavaScript

```javascript
const body = `{
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ]
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/requested_reviewers', {
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
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ]
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/requested_reviewers',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
