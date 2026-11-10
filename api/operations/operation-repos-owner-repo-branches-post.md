# Create a branch

`POST /repos/{owner}/{repo}/branches`

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

Request body: application/json

Type: CreateBranchRepoOption

CreateBranchRepoOption options when creating a branch in a repository

Schema: [CreateBranchRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createbranchrepooption.md)

- `new_branch_name` (required)
  Type: string
  
  Name of the branch to create
  
  uniqueItems: true

- `old_branch_name` (optional)
  Type: string
  
  Name of the old branch to create from
  
  uniqueItems: true

- `old_ref_name` (optional)
  Type: string
  
  Name of the old branch/tag/commit to create from
  
  uniqueItems: true

Responses:

- 201: Branch

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

- 403: The branch is archived or a mirror.

- 404: The old branch does not exist.

- 409: The branch with the same name already exists.

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "new_branch_name": "string",
  "old_branch_name": "string",
  "old_ref_name": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "new_branch_name": "string",
  "old_branch_name": "string",
  "old_ref_name": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches', {
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
  "new_branch_name": "string",
  "old_branch_name": "string",
  "old_ref_name": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branches',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
