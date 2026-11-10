# Create a repository using a template

`POST /repos/{template_owner}/{template_repo}/generate`

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

- `template_owner` (path, string, required) - owner of the template repository
  Type: string

- `template_repo` (path, string, required) - name of the template repository
  Type: string

Request body: application/json

Type: GenerateRepoOption

GenerateRepoOption options when creating a repository using a template

Schema: [GenerateRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/generaterepooption.md)

- `avatar` (optional)
  Type: boolean
  
  include avatar of the template repo

- `default_branch` (optional)
  Type: string
  
  Default branch of the new repository

- `description` (optional)
  Type: string
  
  Description of the repository to create

- `git_content` (optional)
  Type: boolean
  
  include git content of default branch in template repo

- `git_hooks` (optional)
  Type: boolean
  
  include git hooks in template repo

- `labels` (optional)
  Type: boolean
  
  include labels in template repo

- `name` (required)
  Type: string
  
  uniqueItems: true

- `owner` (required)
  Type: string
  
  the organization's name or individual user's name who will own the new repository

- `private` (optional)
  Type: boolean
  
  Whether the repository is private

- `protected_branch` (optional)
  Type: boolean
  
  include protected branches in template repo

- `topics` (optional)
  Type: boolean
  
  include topics in template repo

- `webhooks` (optional)
  Type: boolean
  
  include webhooks in template repo

Responses:

- 201: 

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 409: The repository with the same name already exists.

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/generate' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "avatar": true,
  "default_branch": "string",
  "description": "string",
  "git_content": true,
  "git_hooks": true,
  "labels": true,
  "name": "string",
  "owner": "string",
  "private": true,
  "protected_branch": true,
  "topics": true,
  "webhooks": true
}'
```

### JavaScript

```javascript
const body = `{
  "avatar": true,
  "default_branch": "string",
  "description": "string",
  "git_content": true,
  "git_hooks": true,
  "labels": true,
  "name": "string",
  "owner": "string",
  "private": true,
  "protected_branch": true,
  "topics": true,
  "webhooks": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/generate', {
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
  "avatar": true,
  "default_branch": "string",
  "description": "string",
  "git_content": true,
  "git_hooks": true,
  "labels": true,
  "name": "string",
  "owner": "string",
  "private": true,
  "protected_branch": true,
  "topics": true,
  "webhooks": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/generate',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
