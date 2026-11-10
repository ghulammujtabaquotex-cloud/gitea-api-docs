# Get a team

`GET /teams/{id}`

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

- `id` (path, integer, int64, required) - id of the team to get
  Type: integer, int64

Responses:

- 200: Team

Content type: application/json

Type: Team

Team represents a team in an organization

Schema: [Team](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/team.md)

- `can_create_org_repo` (optional)
  Type: boolean
  
  Whether the team can create repositories in the organization

- `description` (optional)
  Type: string
  
  The description of the team

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the team

- `includes_all_repositories` (optional)
  Type: boolean
  
  Whether the team has access to all repositories in the organization

- `name` (optional)
  Type: string
  
  The name of the team

- `organization` (optional)
  Reference: [Organization](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/organization.md); Type: Organization
  
  Organization represents an organization

- `permission` (optional)
  Reference: [AccessLevelName](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/accesslevelname.md); Type: AccessLevelName
  
  enum: ["none","read","write","admin","owner"]

- `units` (optional)
  Type: Array<string>
  
  Deprecated: This variable should be replaced by UnitsMap and will be dropped in later versions.
  
  deprecated: true
  
  Example:
  
  ```json
  [
    "repo.code",
    "repo.issues",
    "repo.ext_issues",
    "repo.wiki",
    "repo.pulls",
    "repo.releases",
    "repo.projects",
    "repo.ext_wiki"
  ]
  ```
  
  Items:
    Type: string

- `units_map` (optional)
  Type: object
  
  Example:
  
  ```json
  {
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.projects": "none",
    "repo.pulls": "owner",
    "repo.releases": "none",
    "repo.wiki": "admin"
  }
  ```
  
  Additional properties: 
    Type: string

- `visibility` (optional)
  Type: TeamVisibility
  
  Team visibility within the organization. "private" teams are only
  listable by members and org owners; "limited" teams are listable by
  any organization member; "public" teams are listable by any signed-in
  user.
  
  allOf:
    Reference: [TeamVisibility](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/teamvisibility.md); Type: TeamVisibility
    
    enum: ["public","limited","private"]

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/teams/0',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
