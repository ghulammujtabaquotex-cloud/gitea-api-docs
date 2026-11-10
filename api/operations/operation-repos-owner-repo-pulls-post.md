# Create a pull request

`POST /repos/{owner}/{repo}/pulls`

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

Request body: application/json

Type: CreatePullRequestOption

CreatePullRequestOption options when creating a pull request

Schema: [CreatePullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createpullrequestoption.md)

- `allow_maintainer_edit` (optional)
  Type: boolean
  
  Whether maintainers can edit the pull request

- `assignee` (optional)
  Type: string
  
  The primary assignee username

- `assignees` (optional)
  Type: Array<string>
  
  The list of assignee usernames
  
  Items:
    Type: string

- `base` (optional)
  Type: string
  
  The base branch for the pull request

- `body` (optional)
  Type: string
  
  The description body of the pull request

- `due_date` (optional)
  Type: string, date-time

- `head` (optional)
  Type: string
  
  The head branch for the pull request, it could be a branch name on the base repository or
  a form like `<username>:<branch>` which refers to the user's fork repository's branch.

- `labels` (optional)
  Type: Array<integer>
  
  The list of label IDs to assign to the pull request
  
  Items:
    Type: integer, int64

- `milestone` (optional)
  Type: integer, int64
  
  The milestone ID to assign to the pull request

- `reviewers` (optional)
  Type: Array<string>
  
  The list of reviewer usernames
  
  Items:
    Type: string

- `team_reviewers` (optional)
  Type: Array<string>
  
  The list of team reviewer names
  
  Items:
    Type: string

- `title` (optional)
  Type: string
  
  The title of the pull request

Responses:

- 201: 

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 409: APIError is error format response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls' \
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
  "due_date": "2024-01-15T09:30:00Z",
  "head": "string",
  "labels": [
    0
  ],
  "milestone": 0,
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ],
  "title": "string"
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
  "due_date": "2024-01-15T09:30:00Z",
  "head": "string",
  "labels": [
    0
  ],
  "milestone": 0,
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ],
  "title": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls', {
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
  "allow_maintainer_edit": true,
  "assignee": "string",
  "assignees": [
    "string"
  ],
  "base": "string",
  "body": "string",
  "due_date": "2024-01-15T09:30:00Z",
  "head": "string",
  "labels": [
    0
  ],
  "milestone": 0,
  "reviewers": [
    "string"
  ],
  "team_reviewers": [
    "string"
  ],
  "title": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
