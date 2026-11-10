# Create a commit status

`POST /repos/{owner}/{repo}/statuses/{sha}`

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

- `sha` (path, string, required) - sha of the commit
  Type: string

Request body: application/json

Type: CreateStatusOption

CreateStatusOption holds the information needed to create a new CommitStatus for a Commit

Schema: [CreateStatusOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createstatusoption.md)

- `context` (optional)
  Type: string
  
  Context is the unique context identifier for the status

- `description` (optional)
  Type: string
  
  Description provides a brief description of the status

- `state` (optional)
  Type: CommitStatusState
  
  State represents the status state to set (pending, success, error, failure)
  
  allOf:
    Reference: [CommitStatusState](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatusstate.md); Type: CommitStatusState
    
    enum: ["pending","success","error","failure","warning","skipped"]

- `target_url` (optional)
  Type: string, uri
  
  TargetURL is the URL to link to for more details

Responses:

- 201: CommitStatus

Content type: application/json

Type: CommitStatus

CommitStatus holds a single status of a single Commit

Schema: [CommitStatus](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatus.md)

- `context` (optional)
  Type: string
  
  Context is the unique context identifier for the status

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `description` (optional)
  Type: string
  
  Description provides a brief description of the status

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the commit status

- `status` (optional)
  Type: CommitStatusState
  
  State represents the status state (pending, success, error, failure)
  
  allOf:
    Reference: [CommitStatusState](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstatusstate.md); Type: CommitStatusState
    
    enum: ["pending","success","error","failure","warning","skipped"]

- `target_url` (optional)
  Type: string, uri
  
  TargetURL is the URL to link to for more details

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this status

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/statuses/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "context": "string",
  "description": "string",
  "target_url": "https://example.com"
}'
```

### JavaScript

```javascript
const body = `{
  "context": "string",
  "description": "string",
  "target_url": "https://example.com"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/statuses/string', {
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
  "context": "string",
  "description": "string",
  "target_url": "https://example.com"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/statuses/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
