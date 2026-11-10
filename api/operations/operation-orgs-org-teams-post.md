# Create a team

`POST /orgs/{org}/teams`

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

- `org` (path, string, required) - name of the organization
  Type: string

Request body: application/json

Type: CreateTeamOption

CreateTeamOption options for creating a team

Schema: [CreateTeamOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createteamoption.md)

- `can_create_org_repo` (optional)
  Type: boolean
  
  Whether the team can create repositories in the organization

- `description` (optional)
  Type: string
  
  The description of the team

- `includes_all_repositories` (optional)
  Type: boolean
  
  Whether the team has access to all repositories in the organization

- `name` (required)
  Type: string

- `permission` (optional)
  Type: RepoWritePermission
  
  All units have this permission (read/write/admin)
  
  allOf:
    Reference: [RepoWritePermission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repowritepermission.md); Type: RepoWritePermission
    
    enum: ["read","write","admin"]

- `units` (optional)
  Type: Array<string>
  
  Deprecated: This variable should be replaced by UnitsMap and will be dropped in later versions.
  
  deprecated: true
  
  Example:
  
  ```json
  [
    "repo.actions",
    "repo.packages",
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
    "repo.actions": "read",
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.packages": "read",
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
  
  Team visibility within the organization. Defaults to "private".
  
  allOf:
    Reference: [TeamVisibility](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/teamvisibility.md); Type: TeamVisibility
    
    enum: ["public","limited","private"]

Responses:

- 201: Team

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

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/teams' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "can_create_org_repo": true,
  "description": "string",
  "includes_all_repositories": true,
  "name": "string",
  "units": [
    "repo.actions",
    "repo.packages",
    "repo.code",
    "repo.issues",
    "repo.ext_issues",
    "repo.wiki",
    "repo.pulls",
    "repo.releases",
    "repo.projects",
    "repo.ext_wiki"
  ],
  "units_map": {
    "repo.actions": "read",
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.packages": "read",
    "repo.projects": "none",
    "repo.pulls": "owner",
    "repo.releases": "none",
    "repo.wiki": "admin"
  }
}'
```

### JavaScript

```javascript
const body = `{
  "can_create_org_repo": true,
  "description": "string",
  "includes_all_repositories": true,
  "name": "string",
  "units": [
    "repo.actions",
    "repo.packages",
    "repo.code",
    "repo.issues",
    "repo.ext_issues",
    "repo.wiki",
    "repo.pulls",
    "repo.releases",
    "repo.projects",
    "repo.ext_wiki"
  ],
  "units_map": {
    "repo.actions": "read",
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.packages": "read",
    "repo.projects": "none",
    "repo.pulls": "owner",
    "repo.releases": "none",
    "repo.wiki": "admin"
  }
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/teams', {
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
  "can_create_org_repo": true,
  "description": "string",
  "includes_all_repositories": true,
  "name": "string",
  "units": [
    "repo.actions",
    "repo.packages",
    "repo.code",
    "repo.issues",
    "repo.ext_issues",
    "repo.wiki",
    "repo.pulls",
    "repo.releases",
    "repo.projects",
    "repo.ext_wiki"
  ],
  "units_map": {
    "repo.actions": "read",
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.packages": "read",
    "repo.projects": "none",
    "repo.pulls": "owner",
    "repo.releases": "none",
    "repo.wiki": "admin"
  }
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/teams',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
