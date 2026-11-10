# Create a repository on behalf of a user

`POST /admin/users/{username}/repos`

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

- `username` (path, string, required) - username of the user who will own the created repository
  Type: string

Request body: application/json (required)

Type: CreateRepoOption

CreateRepoOption options when creating repository

Schema: [CreateRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createrepooption.md)

- `auto_init` (optional)
  Type: boolean
  
  Whether the repository should be auto-initialized?

- `default_branch` (optional)
  Type: string
  
  DefaultBranch of the repository (used when initializes and in template)

- `description` (optional)
  Type: string
  
  Description of the repository to create

- `gitignores` (optional)
  Type: string
  
  Gitignores to use

- `issue_labels` (optional)
  Type: string
  
  Label-Set to use

- `license` (optional)
  Type: string
  
  License to use

- `name` (required)
  Type: string
  
  Name of the repository to create
  
  uniqueItems: true

- `object_format_name` (optional)
  Type: ObjectFormatName
  
  ObjectFormatName of the underlying git repository, empty string for default (sha1)
  
  allOf:
    Reference: [ObjectFormatName](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/objectformatname.md); Type: ObjectFormatName
    
    enum: ["sha1","sha256"]

- `private` (optional)
  Type: boolean
  
  Whether the repository is private

- `readme` (optional)
  Type: string
  
  Readme of the repository to create

- `template` (optional)
  Type: boolean
  
  Whether the repository is template

- `trust_model` (optional)
  Type: string
  
  TrustModel of the repository
  
  enum: ["default","collaborator","committer","collaboratorcommitter"]

Responses:

- 201: 

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 409: APIError is error format response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/repos' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "auto_init": true,
  "default_branch": "string",
  "description": "string",
  "gitignores": "string",
  "issue_labels": "string",
  "license": "string",
  "name": "string",
  "private": true,
  "readme": "string",
  "template": true,
  "trust_model": "default"
}'
```

### JavaScript

```javascript
const body = `{
  "auto_init": true,
  "default_branch": "string",
  "description": "string",
  "gitignores": "string",
  "issue_labels": "string",
  "license": "string",
  "name": "string",
  "private": true,
  "readme": "string",
  "template": true,
  "trust_model": "default"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/repos', {
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
  "auto_init": true,
  "default_branch": "string",
  "description": "string",
  "gitignores": "string",
  "issue_labels": "string",
  "license": "string",
  "name": "string",
  "private": true,
  "readme": "string",
  "template": true,
  "trust_model": "default"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/users/string/repos',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
