# Add or Update a collaborator to a repository

`PUT /repos/{owner}/{repo}/collaborators/{collaborator}`

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

- `collaborator` (path, string, required) - username of the user to add or update as a collaborator
  Type: string

Request body: application/json

Type: AddCollaboratorOption

AddCollaboratorOption options when adding a user as a collaborator of a repository

Schema: [AddCollaboratorOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/addcollaboratoroption.md)

- `permission` (optional)
  Type: RepoWritePermission
  
  Permission level to grant the collaborator
  
  allOf:
    Reference: [RepoWritePermission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repowritepermission.md); Type: RepoWritePermission
    
    enum: ["read","write","admin"]

Responses:

- 204: APIEmpty is an empty response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PUT 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/collaborators/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{}'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/collaborators/string', {
  method: 'PUT',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    'Content-Type': 'application/json',
  },
  body: '{}',
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.put(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/collaborators/string',
    data='{}'.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
