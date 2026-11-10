# Create a user

`POST /admin/users`

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

Request body: application/json

Type: CreateUserOption

CreateUserOption create user options

Schema: [CreateUserOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createuseroption.md)

- `created_at` (optional)
  Type: string, date-time
  
  For explicitly setting the user creation timestamp. Useful when users are
  migrated from other systems. When omitted, the user's creation timestamp
  will be set to "now".

- `email` (required)
  Type: string

- `full_name` (optional)
  Type: string
  
  The full display name of the user

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `must_change_password` (optional)
  Type: boolean
  
  Whether the user must change password on first login

- `password` (optional)
  Type: string
  
  The plain text password for the user

- `restricted` (optional)
  Type: boolean
  
  Whether the user has restricted access privileges

- `send_notify` (optional)
  Type: boolean
  
  Whether to send welcome notification email to the user

- `source_id` (optional)
  Type: integer, int64
  
  The authentication source ID to associate with the user

- `username` (required)
  Type: string
  
  username of the user

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level: public, limited, or private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

Responses:

- 201: User

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

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 409: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "created_at": "2024-01-15T09:30:00Z",
  "email": "string",
  "full_name": "string",
  "login_name": "string",
  "must_change_password": true,
  "password": "string",
  "restricted": true,
  "send_notify": true,
  "source_id": 0,
  "username": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "created_at": "2024-01-15T09:30:00Z",
  "email": "string",
  "full_name": "string",
  "login_name": "string",
  "must_change_password": true,
  "password": "string",
  "restricted": true,
  "send_notify": true,
  "source_id": 0,
  "username": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users', {
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
  "created_at": "2024-01-15T09:30:00Z",
  "email": "string",
  "full_name": "string",
  "login_name": "string",
  "must_change_password": true,
  "password": "string",
  "restricted": true,
  "send_notify": true,
  "source_id": 0,
  "username": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
