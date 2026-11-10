# Search for issues across the repositories that the user has access to

`GET /repos/issues/search`

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

- `state` (query, string, optional) - State of the issue
  Type: string
  
  default: "open"
  
  enum: ["open","closed","all"]

- `labels` (query, string, optional) - Comma-separated list of label names. Fetch only issues that have any of these labels. Non existent labels are discarded.
  Type: string

- `milestones` (query, string, optional) - Comma-separated list of milestone names. Fetch only issues that have any of these milestones. Non existent milestones are discarded.
  Type: string

- `q` (query, string, optional) - Search string
  Type: string

- `type` (query, string, optional) - Filter by issue type
  Type: string
  
  enum: ["issues","pulls"]

- `since` (query, string, date-time, optional) - Only show issues updated after the given time (RFC 3339 format)
  Type: string, date-time

- `before` (query, string, date-time, optional) - Only show issues updated before the given time (RFC 3339 format)
  Type: string, date-time

- `assigned` (query, boolean, optional) - Filter issues or pulls assigned to the authenticated user
  Type: boolean
  
  default: false

- `created` (query, boolean, optional) - Filter issues or pulls created by the authenticated user
  Type: boolean
  
  default: false

- `mentioned` (query, boolean, optional) - Filter issues or pulls mentioning the authenticated user
  Type: boolean
  
  default: false

- `review_requested` (query, boolean, optional) - Filter pull requests where the authenticated user's review was requested
  Type: boolean
  
  default: false

- `reviewed` (query, boolean, optional) - Filter pull requests reviewed by the authenticated user
  Type: boolean
  
  default: false

- `owner` (query, string, optional) - Filter by repository owner
  Type: string

- `created_by` (query, string, optional) - Only show items which were created by the given user
  Type: string

- `team` (query, string, optional) - Filter by team (requires organization owner parameter)
  Type: string

- `page` (query, integer, optional) - Page number of results to return (1-based)
  Type: integer
  
  default: 1
  
  minimum: 1

- `limit` (query, integer, optional) - Number of items per page
  Type: integer
  
  minimum: 0

Responses:

- 200: IssueList

Content type: application/json

Type: Array<Issue>

Items:
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- 400: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/issues/search?state=open&assigned=false&created=false&mentioned=false&review_requested=false&reviewed=false&page=1' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/issues/search?state=open&assigned=false&created=false&mentioned=false&review_requested=false&reviewed=false&page=1', {
  method: 'GET',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.get(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/issues/search?state=open&assigned=false&created=false&mentioned=false&review_requested=false&reviewed=false&page=1',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
