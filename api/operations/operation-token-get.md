# Get the currently authenticated token

`GET /token`

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

Responses:

- 200: CurrentAccessToken represents the currently authenticated access token.

Content type: application/json

Type: CurrentAccessToken

Schema: [CurrentAccessToken](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/currentaccesstoken.md)

- `created_at` (optional)
  Type: string, date-time
  
  The timestamp when the token was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the access token

- `last_used_at` (optional)
  Type: string, date-time
  
  The timestamp when the token was last used

- `name` (optional)
  Type: string
  
  The name of the access token

- `scopes` (optional)
  Type: Array<string>
  
  The scopes granted to this access token
  
  Items:
    Type: string

- `user` (optional)
  Reference: [UserMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usermeta.md); Type: UserMeta

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/token' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/token', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/token',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
