# Search users according filter conditions

`GET /admin/users`

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

- `source_id` (query, integer, int64, optional) - ID of the user's login source to search for
  Type: integer, int64

- `login_name` (query, string, optional) - identifier of the user, provided by the external authenticator
  Type: string

- `page` (query, integer, optional) - page number of results to return (1-based)
  Type: integer

- `limit` (query, integer, optional) - page size of results
  Type: integer

- `sort` (query, string, optional) - sort users by attribute. Supported values are "name", "created", "updated" and "id". Default is "name"
  Type: string

- `order` (query, string, optional) - sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.
  Type: string

- `q` (query, string, optional) - search term (username, full name, email)
  Type: string

- `visibility` (query, string, optional) - visibility filter. Supported values are "public", "limited" and "private".
  Type: string

- `is_active` (query, boolean, optional) - filter active users
  Type: boolean

- `is_admin` (query, boolean, optional) - filter admin users
  Type: boolean

- `is_restricted` (query, boolean, optional) - filter restricted users
  Type: boolean

- `is_2fa_enabled` (query, boolean, optional) - filter 2FA enabled users
  Type: boolean

- `is_prohibit_login` (query, boolean, optional) - filter login prohibited users
  Type: boolean

Responses:

- 200: UserList

Content type: application/json

Type: Array<User>

Items:
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 403: APIForbiddenError is a forbidden error response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
