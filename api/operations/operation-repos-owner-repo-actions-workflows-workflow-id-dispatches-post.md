# Create a workflow dispatch event

`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`

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

- `return_run_details` (query, boolean, optional) - Whether the response should include the workflow run ID and URLs.
  Type: boolean

- `scoped_workflow_source_repo_id` (query, integer, int64, optional) - For a scoped workflow, the ID of the source repository providing it; omit or 0 for a repo-level workflow.
  Type: integer, int64

Request body: application/json

Type: CreateActionWorkflowDispatch

CreateActionWorkflowDispatch represents the payload for triggering a workflow dispatch event

Schema: [CreateActionWorkflowDispatch](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createactionworkflowdispatch.md)

- `inputs` (optional)
  Type: object
  
  Additional properties: 
    Type: string

- `ref` (required)
  Type: string
  
  Example:
  
  ```json
  "refs/heads/main"
  ```

Responses:

- 200: RunDetails

Content type: application/json

Type: RunDetails

RunDetails returns workflow_dispatch runid and url

Schema: [RunDetails](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/rundetails.md)

- `html_url` (optional)
  Type: string, uri

- `run_url` (optional)
  Type: string, uri

- `workflow_run_id` (optional)
  Type: integer, int64

- 204: No Content, if return_run_details is missing or false

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string/dispatches' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "inputs": {},
  "ref": "refs/heads/main"
}'
```

### JavaScript

```javascript
const body = `{
  "inputs": {},
  "ref": "refs/heads/main"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string/dispatches', {
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
  "inputs": {},
  "ref": "refs/heads/main"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/workflows/string/dispatches',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
