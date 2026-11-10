# Remove a badge from a user

`DELETE /admin/users/{username}/badges`

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

- `username` (path, string, required) - username of the user whose badge is to be deleted
  Type: string

Request body: application/json

Type: UserBadgeOption

UserBadgeOption options for link between users and badges

Schema: [UserBadgeOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/userbadgeoption.md)

- `badge_slugs` (optional)
  Type: Array<string>
  
  Example:
  
  ```json
  [
    "badge1",
    "badge2"
  ]
  ```
  
  Items:
    Type: string

Responses:

- 204: APIEmpty is an empty response

- 403: APIForbiddenError is a forbidden error response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X DELETE 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/badges' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "badge_slugs": [
    "badge1",
    "badge2"
  ]
}'
```

### JavaScript

```javascript
const body = `{
  "badge_slugs": [
    "badge1",
    "badge2"
  ]
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/badges', {
  method: 'DELETE',
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
  "badge_slugs": [
    "badge1",
    "badge2"
  ]
}'''

response = requests.delete(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/badges',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
