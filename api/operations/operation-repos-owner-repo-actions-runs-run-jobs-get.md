# Lists all jobs for a workflow run

`GET /repos/{owner}/{repo}/actions/runs/{run}/jobs`

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

- `run` (path, integer, required) - runid of the workflow run
  Type: integer

- `status` (query, string, optional) - workflow status (requested, pending, queued, in_progress, failure, success, skipped)
  Type: string

- `page` (query, integer, optional) - page number of results to return (1-based)
  Type: integer

- `limit` (query, integer, optional) - page size of results
  Type: integer

- `sort` (query, string, optional) - sort jobs by attribute. Supported values are "id". Default is "id"
  Type: string

- `order` (query, string, optional) - sort order, either "asc" (ascending) or "desc" (descending). Default is "asc"
  Type: string

Responses:

- 200: WorkflowJobsList

Content type: application/json

Type: ActionWorkflowJobsResponse

ActionWorkflowJobsResponse returns ActionWorkflowJobs

Schema: [ActionWorkflowJobsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowjobsresponse.md)

- `jobs` (optional)
  Type: Array<ActionWorkflowJob>
  
  Items:
    Reference: [ActionWorkflowJob](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowjob.md); Type: ActionWorkflowJob
    
    ActionWorkflowJob represents a WorkflowJob

- `total_count` (optional)
  Type: integer, int64

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/actions/runs/0/jobs',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
