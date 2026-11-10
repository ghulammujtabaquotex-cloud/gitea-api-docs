# Move an issue between a project's columns

`POST /orgs/{org}/projects/{id}/issues/{issue_id}/move`

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

- `org` (path, string, required) - name of the organization
  Type: string

- `id` (path, integer, int64, required) - id of the project
  Type: integer, int64

- `issue_id` (path, integer, int64, required) - global id of the issue, not the repository-local index
  Type: integer, int64

Request body: application/json

Type: MoveProjectIssueOption

MoveProjectIssueOption represents options for moving an issue between columns

Schema: [MoveProjectIssueOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/moveprojectissueoption.md)

- `column_id` (required)
  Type: integer, int64
  
  Target column to move the issue into

- `sorting` (optional)
  Type: integer, int64
  
  Position within the column, ascending. Omit to append. Negative values sort above
  the rest, equal values are ordered newest first.

Responses:

- 204: APIEmpty is an empty response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0/issues/0/move' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "column_id": 0,
  "sorting": 0
}'
```

### JavaScript

```javascript
const body = `{
  "column_id": 0,
  "sorting": 0
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0/issues/0/move', {
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
  "column_id": 0,
  "sorting": 0
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0/issues/0/move',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
