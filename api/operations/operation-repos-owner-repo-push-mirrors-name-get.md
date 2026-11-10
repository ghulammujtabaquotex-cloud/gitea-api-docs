# Get push mirror of the repository by remoteName

`GET /repos/{owner}/{repo}/push_mirrors/{name}`

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

- `name` (path, string, required) - remote name of push mirror
  Type: string

Responses:

- 200: PushMirror

Content type: application/json

Type: PushMirror

PushMirror represents information of a push mirror

Schema: [PushMirror](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pushmirror.md)

- `created` (optional)
  Type: string, date-time

- `interval` (optional)
  Type: string
  
  The sync interval for automatic updates

- `last_error` (optional)
  Type: string
  
  The last error message encountered during sync

- `last_update` (optional)
  Type: string, date-time

- `remote_address` (optional)
  Type: string
  
  The remote repository URL being mirrored to

- `remote_name` (optional)
  Type: string
  
  The name of the remote in the git configuration

- `repo_name` (optional)
  Type: string
  
  The name of the source repository

- `sync_on_commit` (optional)
  Type: boolean
  
  Whether to sync on every commit

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/push_mirrors/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/push_mirrors/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/push_mirrors/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
