# Retrieve a specific branch from a repository, including its effective branch protection

`GET /repos/{owner}/{repo}/branches/{branch}`

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

- `owner` (path, string, required) - owner of the repo
  Type: string

- `repo` (path, string, required) - name of the repo
  Type: string

- `branch` (path, string, required) - branch to get
  Type: string

Responses:

- 200: Branch

Content type: application/json

Type: Branch

Branch represents a repository branch

Schema: [Branch](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/branch.md)

- `commit` (optional)
  Reference: [PayloadCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommit.md); Type: PayloadCommit
  
  PayloadCommit represents a commit

- `effective_branch_protection_name` (optional)
  Type: string
  
  EffectiveBranchProtectionName is the name of the effective branch protection rule

- `enable_status_check` (optional)
  Type: boolean
  
  EnableStatusCheck indicates if status checks are enabled

- `name` (optional)
  Type: string
  
  Name is the branch name

- `protected` (optional)
  Type: boolean
  
  Protected indicates if the branch is protected

- `required_approvals` (optional)
  Type: integer, int64
  
  RequiredApprovals is the number of required approvals for pull requests

- `status_check_contexts` (optional)
  Type: Array<string>
  
  StatusCheckContexts contains the list of required status check contexts
  
  Items:
    Type: string

- `user_can_merge` (optional)
  Type: boolean
  
  UserCanMerge indicates if the current user can merge to this branch

- `user_can_push` (optional)
  Type: boolean
  
  UserCanPush indicates if the current user can push to this branch

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
