# Get a workflow

`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`

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

- `workflow_id` (path, string, required) - id of the workflow
  Type: string

Responses:

- 200: ActionWorkflow

Content type: application/json

Type: ActionWorkflow

ActionWorkflow represents a ActionWorkflow

Schema: [ActionWorkflow](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflow.md)

- `badge_url` (optional)
  Type: string, uri
  
  BadgeURL is the URL for the workflow badge

- `created_at` (optional)
  Type: string, date-time

- `deleted_at` (optional)
  Type: string, date-time

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the workflow

- `id` (optional)
  Type: string
  
  ID is the unique identifier for the workflow

- `name` (optional)
  Type: string
  
  Name is the name of the workflow

- `path` (optional)
  Type: string
  
  Path is the file path of the workflow

- `state` (optional)
  Type: string
  
  State indicates if the workflow is active or disabled

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this workflow

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

- 500: APIError is error format response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
