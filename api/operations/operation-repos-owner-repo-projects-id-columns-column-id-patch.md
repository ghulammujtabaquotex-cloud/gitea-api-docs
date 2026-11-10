# Edit a project column

`PATCH /repos/{owner}/{repo}/projects/{id}/columns/{column_id}`

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

- `id` (path, integer, int64, required) - id of the project
  Type: integer, int64

- `column_id` (path, integer, int64, required) - id of the column
  Type: integer, int64

Request body: application/json

Type: EditProjectColumnOption

EditProjectColumnOption represents options for editing a project column

Schema: [EditProjectColumnOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editprojectcolumnoption.md)

- `color` (optional)
  Type: string
  
  Column color in 6-digit hex format, e.g. #FF0000

- `sorting` (optional)
  Type: integer, int64
  
  Position of the column within the project, between -128 and 127

- `title` (optional)
  Type: string

Responses:

- 200: ProjectColumn

Content type: application/json

Type: ProjectColumn

ProjectColumn represents a project column (board)

Schema: [ProjectColumn](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/projectcolumn.md)

- `color` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `default` (optional)
  Type: boolean

- `id` (optional)
  Type: integer, int64

- `project_id` (optional)
  Type: integer, int64

- `sorting` (optional)
  Type: integer, int64

- `title` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time
  
  null only for legacy rows that carry no update timestamp

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/projects/0/columns/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "color": "string",
  "sorting": 0,
  "title": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "color": "string",
  "sorting": 0,
  "title": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/projects/0/columns/0', {
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
  "color": "string",
  "sorting": 0,
  "title": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/projects/0/columns/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
