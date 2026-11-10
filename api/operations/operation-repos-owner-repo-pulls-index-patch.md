# Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

`PATCH /repos/{owner}/{repo}/pulls/{index}`

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

- `index` (path, integer, int64, required) - index of the pull request to edit
  Type: integer, int64

Request body: application/json

Type: EditPullRequestOption

EditPullRequestOption options when modify pull request

Schema: [EditPullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editpullrequestoption.md)

- `allow_maintainer_edit` (optional)
  Type: boolean
  
  Whether to allow maintainer edits

- `assignee` (optional)
  Type: string
  
  The new primary assignee username

- `assignees` (optional)
  Type: Array<string>
  
  The new list of assignee usernames
  
  Items:
    Type: string

- `base` (optional)
  Type: string
  
  The new base branch for the pull request

- `body` (optional)
  Type: string
  
  The new description body for the pull request

- `content_version` (optional)
  Type: integer, int64
  
  The current version of the pull request content to detect conflicts during editing

- `due_date` (optional)
  Type: string, date-time

- `labels` (optional)
  Type: Array<integer>
  
  The new list of label IDs for the pull request
  
  Items:
    Type: integer, int64

- `milestone` (optional)
  Type: integer, int64
  
  The new milestone ID for the pull request

- `state` (optional)
  Type: string
  
  The new state for the pull request

- `title` (optional)
  Type: string
  
  The new title for the pull request

- `unset_due_date` (optional)
  Type: boolean
  
  Whether to remove the current deadline

Responses:

- 201: 

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 409: APIError is error format response

- 412: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "allow_maintainer_edit": true,
  "assignee": "string",
  "assignees": [
    "string"
  ],
  "base": "string",
  "body": "string",
  "content_version": 0,
  "due_date": "2024-01-15T09:30:00Z",
  "labels": [
    0
  ],
  "milestone": 0,
  "state": "string",
  "title": "string",
  "unset_due_date": true
}'
```

### JavaScript

```javascript
const body = `{
  "allow_maintainer_edit": true,
  "assignee": "string",
  "assignees": [
    "string"
  ],
  "base": "string",
  "body": "string",
  "content_version": 0,
  "due_date": "2024-01-15T09:30:00Z",
  "labels": [
    0
  ],
  "milestone": 0,
  "state": "string",
  "title": "string",
  "unset_due_date": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0', {
  method: 'PATCH',
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
  "allow_maintainer_edit": true,
  "assignee": "string",
  "assignees": [
    "string"
  ],
  "base": "string",
  "body": "string",
  "content_version": 0,
  "due_date": "2024-01-15T09:30:00Z",
  "labels": [
    0
  ],
  "milestone": 0,
  "state": "string",
  "title": "string",
  "unset_due_date": true
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
