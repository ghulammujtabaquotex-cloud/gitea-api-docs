# Edit an existing user

`PATCH /admin/users/{username}`

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

- `username` (path, string, required) - username of the user whose data is to be edited
  Type: string

Request body: application/json

Type: EditUserOption

EditUserOption edit user options

Schema: [EditUserOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/edituseroption.md)

- `active` (optional)
  Type: boolean
  
  Whether the user account is active

- `admin` (optional)
  Type: boolean
  
  Whether the user has administrator privileges

- `allow_create_organization` (optional)
  Type: boolean
  
  Whether the user can create organizations

- `allow_git_hook` (optional)
  Type: boolean
  
  Whether the user can use Git hooks

- `allow_import_local` (optional)
  Type: boolean
  
  Whether the user can import local repositories

- `description` (optional)
  Type: string
  
  The user's personal description or bio

- `email` (optional)
  Type: string, email
  
  The email address of the user

- `full_name` (optional)
  Type: string
  
  The full display name of the user

- `location` (optional)
  Type: string
  
  The user's location or address

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `max_repo_creation` (optional)
  Type: integer, int64
  
  Maximum number of repositories the user can create

- `must_change_password` (optional)
  Type: boolean
  
  Whether the user must change password on next login

- `password` (optional)
  Type: string
  
  The plain text password for the user

- `prohibit_login` (optional)
  Type: boolean
  
  Whether the user is prohibited from logging in

- `restricted` (optional)
  Type: boolean
  
  Whether the user has restricted access privileges

- `source_id` (required)
  Type: integer, int64
  
  The authentication source ID to associate with the user

- `type` (optional)
  Type: UserTypeString
  
  The user type
  
  allOf:
    Reference: [UserTypeString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usertypestring.md); Type: UserTypeString
    
    enum: ["User","Organization","Bot"]

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level: public, limited, or private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The user's personal website URL

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

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 409: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "active": true,
  "admin": true,
  "allow_create_organization": true,
  "allow_git_hook": true,
  "allow_import_local": true,
  "description": "string",
  "email": "user@example.com",
  "full_name": "string",
  "location": "string",
  "login_name": "string",
  "max_repo_creation": 0,
  "must_change_password": true,
  "password": "string",
  "prohibit_login": true,
  "restricted": true,
  "source_id": 0,
  "website": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "active": true,
  "admin": true,
  "allow_create_organization": true,
  "allow_git_hook": true,
  "allow_import_local": true,
  "description": "string",
  "email": "user@example.com",
  "full_name": "string",
  "location": "string",
  "login_name": "string",
  "max_repo_creation": 0,
  "must_change_password": true,
  "password": "string",
  "prohibit_login": true,
  "restricted": true,
  "source_id": 0,
  "website": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string', {
  method: 'PATCH',
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
  "active": true,
  "admin": true,
  "allow_create_organization": true,
  "allow_git_hook": true,
  "allow_import_local": true,
  "description": "string",
  "email": "user@example.com",
  "full_name": "string",
  "location": "string",
  "login_name": "string",
  "max_repo_creation": 0,
  "must_change_password": true,
  "password": "string",
  "prohibit_login": true,
  "restricted": true,
  "source_id": 0,
  "website": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
