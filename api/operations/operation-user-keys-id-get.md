# Get a public key

`GET /user/keys/{id}`

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

- `id` (path, integer, int64, required) - id of key to get
  Type: integer, int64

Responses:

- 200: PublicKey

Content type: application/json

Type: PublicKey

PublicKey publickey is a user key to push code to repository

Schema: [PublicKey](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/publickey.md)

- `created_at` (optional)
  Type: string, date-time
  
  Created is the time when the key was added

- `fingerprint` (optional)
  Type: string
  
  Fingerprint is the key's fingerprint

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the public key

- `key` (optional)
  Type: string
  
  Key contains the actual SSH public key content

- `key_type` (optional)
  Type: string
  
  KeyType indicates the type of the SSH key

- `last_used_at` (optional)
  Type: string, date-time
  
  Updated is the time when the key was last used

- `read_only` (optional)
  Type: boolean
  
  ReadOnly indicates if the key has read-only access

- `title` (optional)
  Type: string
  
  Title is the human-readable name for the key

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this key

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 401: APIUnauthorizedError is an unauthorized error response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/keys/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/keys/0', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/keys/0',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
