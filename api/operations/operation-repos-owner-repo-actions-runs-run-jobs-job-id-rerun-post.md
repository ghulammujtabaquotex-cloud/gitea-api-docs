# Reruns a specific workflow job in a run

`POST /repos/{owner}/{repo}/actions/runs/{run}/jobs/{job_id}/rerun`

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

- `repo` (path, string, required) - name of the repository
  Type: string

- `run` (path, integer, required) - id of the run
  Type: integer

- `job_id` (path, integer, required) - id of the job
  Type: integer

Responses:

- 201: WorkflowJob

Content type: application/json

Type: ActionWorkflowJob

ActionWorkflowJob represents a WorkflowJob

Schema: [ActionWorkflowJob](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowjob.md)

- `completed_at` (optional)
  Type: string, date-time

- `conclusion` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `head_branch` (optional)
  Type: string

- `head_sha` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `labels` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `name` (optional)
  Type: string

- `run_attempt` (optional)
  Type: integer, int64

- `run_id` (optional)
  Type: integer, int64

- `run_url` (optional)
  Type: string, uri

- `runner_id` (optional)
  Type: integer, int64

- `runner_name` (optional)
  Type: string

- `started_at` (optional)
  Type: string, date-time

- `status` (optional)
  Type: string

- `steps` (optional)
  Type: Array<ActionWorkflowStep>
  
  Items:
    Reference: [ActionWorkflowStep](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowstep.md); Type: ActionWorkflowStep
    
    ActionWorkflowStep represents a step of a WorkflowJob

- `url` (optional)
  Type: string, uri

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 409: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs/0/rerun' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs/0/rerun', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs/0/rerun',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
