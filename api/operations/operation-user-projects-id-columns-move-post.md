# Reorder a project's columns

`POST /user/projects/{id}/columns/move`

Reorders every column of the project at once. The body lists all column IDs in their new order.

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

- `id` (path, integer, int64, required) - id of the project
  Type: integer, int64

Request body: application/json

Type: MoveProjectColumnsOption

MoveProjectColumnsOption represents options for reordering a project's columns

Schema: [MoveProjectColumnsOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/moveprojectcolumnsoption.md)

- `column_ids` (required)
  Type: Array<integer>
  
  Every column ID of the project, in the desired left-to-right order
  
  Items:
    Type: integer, int64

Responses:

- 204: APIEmpty is an empty response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/projects/0/columns/move' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "column_ids": [
    0
  ]
}'
```

### JavaScript

```javascript
const body = `{
  "column_ids": [
    0
  ]
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/projects/0/columns/move', {
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
  "column_ids": [
    0
  ]
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/projects/0/columns/move',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
