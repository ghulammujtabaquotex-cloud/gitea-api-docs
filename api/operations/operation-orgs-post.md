# Create an organization

`POST /orgs`

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

Request body: application/json (required)

Type: CreateOrgOption

CreateOrgOption options for creating an organization

Schema: [CreateOrgOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createorgoption.md)

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `username` (required)
  Type: string
  
  username of the organization

- `visibility` (optional)
  Type: VisibilityString
  
  possible values are `public` (default), `limited` or `private`
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization

Responses:

- 201: Organization

Content type: application/json

Type: Organization

Organization represents an organization

Schema: [Organization](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/organization.md)

- `avatar_url` (optional)
  Type: string, uri
  
  The URL of the organization's avatar

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `name` (optional)
  Type: string
  
  The name of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `username` (optional)
  Type: string
  
  username of the organization
  deprecated
  
  deprecated: true

- `visibility` (optional)
  Type: VisibilityString
  
  The visibility level of the organization (public, limited, private)
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization

- 403: APIForbiddenError is a forbidden error response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "description": "string",
  "email": "string",
  "full_name": "string",
  "location": "string",
  "repo_admin_change_team_access": true,
  "username": "string",
  "website": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "description": "string",
  "email": "string",
  "full_name": "string",
  "location": "string",
  "repo_admin_change_team_access": true,
  "username": "string",
  "website": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs', {
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
  "description": "string",
  "email": "string",
  "full_name": "string",
  "location": "string",
  "repo_admin_change_team_access": true,
  "username": "string",
  "website": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
