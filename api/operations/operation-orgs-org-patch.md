# Edit an organization

`PATCH /orgs/{org}`

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

- `org` (path, string, required) - name of the organization to edit
  Type: string

Request body: application/json (required)

Type: EditOrgOption

EditOrgOption options for editing an organization

Schema: [EditOrgOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editorgoption.md)

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization; use empty string to clear

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `visibility` (optional)
  Type: VisibilityString
  
  possible values are `public`, `limited` or `private`
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization

Responses:

- 200: Organization

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

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "description": "string",
  "email": "string",
  "full_name": "string",
  "location": "string",
  "repo_admin_change_team_access": true,
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
  "website": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string', {
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
  "description": "string",
  "email": "string",
  "full_name": "string",
  "location": "string",
  "repo_admin_change_team_access": true,
  "website": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
