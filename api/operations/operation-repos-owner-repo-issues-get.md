# List a repository's issues

`GET /repos/{owner}/{repo}/issues`

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

- `state` (query, string, optional) - whether issue is open or closed
  Type: string
  
  enum: ["closed","open","all"]

- `labels` (query, string, optional) - comma separated list of label names. Fetch only issues that have any of this label names. Non existent labels are discarded.
  Type: string

- `q` (query, string, optional) - search string
  Type: string

- `type` (query, string, optional) - filter by type (issues / pulls) if set
  Type: string
  
  enum: ["issues","pulls"]

- `milestones` (query, string, optional) - comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded
  Type: string

- `since` (query, string, date-time, optional) - Only show items updated after the given time. This is a timestamp in RFC 3339 format
  Type: string, date-time

- `before` (query, string, date-time, optional) - Only show items updated before the given time. This is a timestamp in RFC 3339 format
  Type: string, date-time

- `created_by` (query, string, optional) - Only show items which were created by the given user
  Type: string

- `assigned_by` (query, string, optional) - Only show items for which the given user is assigned
  Type: string

- `mentioned_by` (query, string, optional) - Only show items in which the given user was mentioned
  Type: string

- `page` (query, integer, optional) - page number of results to return (1-based)
  Type: integer

- `limit` (query, integer, optional) - page size of results
  Type: integer

Responses:

- 200: IssueList

Content type: application/json

Type: Array<Issue>

Items:
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
