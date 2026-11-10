# Add tracked time to a issue

`POST /repos/{owner}/{repo}/issues/{index}/times`

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

- `index` (path, integer, int64, required) - index of the issue
  Type: integer, int64

Request body: application/json

Type: AddTimeOption

AddTimeOption options for adding time to an issue

Schema: [AddTimeOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/addtimeoption.md)

- `created` (optional)
  Type: string, date-time

- `time` (required)
  Type: integer, int64
  
  time in seconds

- `user_name` (optional)
  Type: string
  
  username of the user who spent the time working on the issue (optional)

Responses:

- 200: TrackedTime

Content type: application/json

Type: TrackedTime

TrackedTime worked time for an issue / pr

Schema: [TrackedTime](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/trackedtime.md)

- `created` (optional)
  Type: string, date-time

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the tracked time entry

- `issue` (optional)
  Reference: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md); Type: Issue
  
  Issue represents an issue in a repository

- `issue_id` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility)
  
  deprecated: true

- `time` (optional)
  Type: integer, int64
  
  Time in seconds

- `user_id` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility)
  
  deprecated: true

- `user_name` (optional)
  Type: string
  
  username of the user

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/times' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "created": "2024-01-15T09:30:00Z",
  "time": 0,
  "user_name": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "created": "2024-01-15T09:30:00Z",
  "time": 0,
  "user_name": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/times', {
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
  "created": "2024-01-15T09:30:00Z",
  "time": 0,
  "user_name": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/times',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
