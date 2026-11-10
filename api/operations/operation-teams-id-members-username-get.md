# List a particular member of team

`GET /teams/{id}/members/{username}`

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

- `id` (path, integer, int64, required) - id of the team
  Type: integer, int64

- `username` (path, string, required) - username of the user whose data is to be listed
  Type: string

Responses:

- 200: User

Content type: application/json

Type: User

User represents a user

Schema: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md)

- `active` (optional)
  Type: boolean
  
  Is user active

- `avatar_url` (optional)
  Type: string, uri
  
  URL to the user's avatar

- `created` (optional)
  Type: string, date-time

- `description` (optional)
  Type: string
  
  the user's description

- `email` (optional)
  Type: string, email

- `followers_count` (optional)
  Type: integer, int64
  
  user counts

- `following_count` (optional)
  Type: integer, int64

- `full_name` (optional)
  Type: string
  
  the user's full name

- `html_url` (optional)
  Type: string, uri
  
  URL to the user's gitea page

- `id` (optional)
  Type: integer, int64
  
  the user's id

- `is_admin` (optional)
  Type: boolean
  
  Is the user an administrator

- `language` (optional)
  Type: string
  
  User locale

- `last_login` (optional)
  Type: string, date-time

- `location` (optional)
  Type: string
  
  the user's location

- `login` (optional)
  Type: string
  
  login of the user, same as `username`

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `prohibit_login` (optional)
  Type: boolean
  
  Is user login prohibited

- `restricted` (optional)
  Type: boolean
  
  Is user restricted

- `source_id` (optional)
  Type: integer, int64
  
  The ID of the user's Authentication Source

- `starred_repos_count` (optional)
  Type: integer, int64

- `type` (optional)
  Type: UserTypeString
  
  the user type
  
  allOf:
    Reference: [UserTypeString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usertypestring.md); Type: UserTypeString
    
    enum: ["User","Organization","Bot"]

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level option: public, limited, private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  the user's website

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0/members/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0/members/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0/members/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
