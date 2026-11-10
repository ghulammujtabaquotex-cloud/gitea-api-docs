# Migrate a remote git repository

`POST /repos/migrate`

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

Type: MigrateRepoOptions

MigrateRepoOptions options for migrating repository's
this is used to interact with api v1

Schema: [MigrateRepoOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/migraterepooptions.md)

- `auth_password` (optional)
  Type: string

- `auth_token` (optional)
  Type: string

- `auth_username` (optional)
  Type: string

- `aws_access_key_id` (optional)
  Type: string

- `aws_secret_access_key` (optional)
  Type: string

- `clone_addr` (required)
  Type: string

- `description` (optional)
  Type: string

- `issues` (optional)
  Type: boolean

- `labels` (optional)
  Type: boolean

- `lfs` (optional)
  Type: boolean

- `lfs_endpoint` (optional)
  Type: string

- `milestones` (optional)
  Type: boolean

- `mirror` (optional)
  Type: boolean

- `mirror_interval` (optional)
  Type: string

- `private` (optional)
  Type: boolean

- `pull_requests` (optional)
  Type: boolean

- `releases` (optional)
  Type: boolean

- `repo_name` (required)
  Type: string

- `repo_owner` (optional)
  Type: string
  
  the organization's name or individual user's name who will own the migrated repository

- `service` (optional)
  Type: string
  
  enum: ["git","github","gitea","gitlab","gogs","onedev","gitbucket","codebase","codecommit"]

- `uid` (optional)
  Type: integer, int64
  
  deprecated (only for backwards compatibility, use repo_owner instead)
  
  deprecated: true

- `wiki` (optional)
  Type: boolean

Responses:

- 201: 

- 403: APIForbiddenError is a forbidden error response

- 409: The repository with the same name already exists.

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/migrate' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "auth_password": "string",
  "auth_token": "string",
  "auth_username": "string",
  "aws_access_key_id": "string",
  "aws_secret_access_key": "string",
  "clone_addr": "string",
  "description": "string",
  "issues": true,
  "labels": true,
  "lfs": true,
  "lfs_endpoint": "string",
  "milestones": true,
  "mirror": true,
  "mirror_interval": "string",
  "private": true,
  "pull_requests": true,
  "releases": true,
  "repo_name": "string",
  "repo_owner": "string",
  "service": "git",
  "uid": 0,
  "wiki": true
}'
```

### JavaScript

```javascript
const body = `{
  "auth_password": "string",
  "auth_token": "string",
  "auth_username": "string",
  "aws_access_key_id": "string",
  "aws_secret_access_key": "string",
  "clone_addr": "string",
  "description": "string",
  "issues": true,
  "labels": true,
  "lfs": true,
  "lfs_endpoint": "string",
  "milestones": true,
  "mirror": true,
  "mirror_interval": "string",
  "private": true,
  "pull_requests": true,
  "releases": true,
  "repo_name": "string",
  "repo_owner": "string",
  "service": "git",
  "uid": 0,
  "wiki": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/migrate', {
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
  "auth_password": "string",
  "auth_token": "string",
  "auth_username": "string",
  "aws_access_key_id": "string",
  "aws_secret_access_key": "string",
  "clone_addr": "string",
  "description": "string",
  "issues": true,
  "labels": true,
  "lfs": true,
  "lfs_endpoint": "string",
  "milestones": true,
  "mirror": true,
  "mirror_interval": "string",
  "private": true,
  "pull_requests": true,
  "releases": true,
  "repo_name": "string",
  "repo_owner": "string",
  "service": "git",
  "uid": 0,
  "wiki": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/migrate',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
