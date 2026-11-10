# Create an access token

`POST /users/{username}/tokens`

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

- `username` (path, string, required) - username of the user whose token is to be created
  Type: string

Request body: application/json

Type: CreateAccessTokenOption

CreateAccessTokenOption options when create access token

Schema: [CreateAccessTokenOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createaccesstokenoption.md)

- `name` (required)
  Type: string

- `scopes` (optional)
  Type: Array<string>
  
  Example:
  
  ```json
  [
    "all",
    "read:activitypub",
    "read:issue",
    "write:misc",
    "read:notification",
    "read:organization",
    "read:package",
    "read:repository",
    "read:user"
  ]
  ```
  
  Items:
    Type: string

Responses:

- 201: AccessToken represents an API access token.

Content type: application/json

Type: AccessToken

Schema: [AccessToken](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/accesstoken.md)

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

- `sha1` (optional)
  Type: string
  
  The SHA1 hash of the access token

- `token_last_eight` (optional)
  Type: string
  
  The last eight characters of the token

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/tokens' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "name": "string",
  "scopes": [
    "all",
    "read:activitypub",
    "read:issue",
    "write:misc",
    "read:notification",
    "read:organization",
    "read:package",
    "read:repository",
    "read:user"
  ]
}'
```

### JavaScript

```javascript
const body = `{
  "name": "string",
  "scopes": [
    "all",
    "read:activitypub",
    "read:issue",
    "write:misc",
    "read:notification",
    "read:organization",
    "read:package",
    "read:repository",
    "read:user"
  ]
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/tokens', {
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
  "name": "string",
  "scopes": [
    "all",
    "read:activitypub",
    "read:issue",
    "write:misc",
    "read:notification",
    "read:organization",
    "read:package",
    "read:repository",
    "read:user"
  ]
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/users/string/tokens',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
