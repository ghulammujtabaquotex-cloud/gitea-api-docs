# Get user permissions in organization

`GET /users/{username}/orgs/{org}/permissions`

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

- `username` (path, string, required) - username of the user whose permissions are to be obtained
  Type: string

- `org` (path, string, required) - name of the organization
  Type: string

Responses:

- 200: OrganizationPermissions

Content type: application/json

Type: OrganizationPermissions

OrganizationPermissions list different users permissions on an organization

Schema: [OrganizationPermissions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/organizationpermissions.md)

- `can_create_repository` (optional)
  Type: boolean
  
  Whether the user can create repositories in the organization

- `can_read` (optional)
  Type: boolean
  
  Whether the user can read the organization

- `can_write` (optional)
  Type: boolean
  
  Whether the user can write to the organization

- `is_admin` (optional)
  Type: boolean
  
  Whether the user is an admin of the organization

- `is_owner` (optional)
  Type: boolean
  
  Whether the user is an owner of the organization

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/orgs/string/permissions' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/orgs/string/permissions', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/orgs/string/permissions',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
