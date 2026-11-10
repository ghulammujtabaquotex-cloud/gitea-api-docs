# Edit a branch protections for a repository. Only fields that are set will be changed

`PATCH /repos/{owner}/{repo}/branch_protections/{name}`

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

- `name` (path, string, required) - name of protected branch
  Type: string

Request body: application/json

Type: EditBranchProtectionOption

EditBranchProtectionOption options for editing a branch protection

Schema: [EditBranchProtectionOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editbranchprotectionoption.md)

- `approvals_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `approvals_whitelist_username` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `block_admin_merge_override` (optional)
  Type: boolean

- `block_on_codeowner_reviews` (optional)
  Type: boolean

- `block_on_official_review_requests` (optional)
  Type: boolean

- `block_on_outdated_branch` (optional)
  Type: boolean

- `block_on_rejected_reviews` (optional)
  Type: boolean

- `bypass_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `bypass_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `dismiss_stale_approvals` (optional)
  Type: boolean

- `enable_approvals_whitelist` (optional)
  Type: boolean

- `enable_bypass_allowlist` (optional)
  Type: boolean

- `enable_force_push` (optional)
  Type: boolean

- `enable_force_push_allowlist` (optional)
  Type: boolean

- `enable_merge_whitelist` (optional)
  Type: boolean

- `enable_push` (optional)
  Type: boolean

- `enable_push_whitelist` (optional)
  Type: boolean

- `enable_status_check` (optional)
  Type: boolean

- `force_push_allowlist_deploy_keys` (optional)
  Type: boolean

- `force_push_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `force_push_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `ignore_stale_approvals` (optional)
  Type: boolean

- `merge_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `merge_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `priority` (optional)
  Type: integer, int64

- `protected_file_patterns` (optional)
  Type: string

- `push_whitelist_deploy_keys` (optional)
  Type: boolean

- `push_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `push_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `require_signed_commits` (optional)
  Type: boolean

- `required_approvals` (optional)
  Type: integer, int64

- `status_check_contexts` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `unprotected_file_patterns` (optional)
  Type: string

Responses:

- 200: BranchProtection

Content type: application/json

Type: BranchProtection

BranchProtection represents a branch protection for a repository

Schema: [BranchProtection](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/branchprotection.md)

- `approvals_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `approvals_whitelist_username` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `block_admin_merge_override` (optional)
  Type: boolean

- `block_on_codeowner_reviews` (optional)
  Type: boolean

- `block_on_official_review_requests` (optional)
  Type: boolean

- `block_on_outdated_branch` (optional)
  Type: boolean

- `block_on_rejected_reviews` (optional)
  Type: boolean

- `branch_name` (optional)
  Type: string

- `bypass_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `bypass_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `created_at` (optional)
  Type: string, date-time

- `dismiss_stale_approvals` (optional)
  Type: boolean

- `enable_approvals_whitelist` (optional)
  Type: boolean

- `enable_bypass_allowlist` (optional)
  Type: boolean

- `enable_force_push` (optional)
  Type: boolean

- `enable_force_push_allowlist` (optional)
  Type: boolean

- `enable_merge_whitelist` (optional)
  Type: boolean

- `enable_push` (optional)
  Type: boolean

- `enable_push_whitelist` (optional)
  Type: boolean

- `enable_status_check` (optional)
  Type: boolean

- `force_push_allowlist_deploy_keys` (optional)
  Type: boolean

- `force_push_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `force_push_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `ignore_stale_approvals` (optional)
  Type: boolean

- `merge_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `merge_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `priority` (optional)
  Type: integer, int64
  
  Priority is the priority of this branch protection rule

- `protected_file_patterns` (optional)
  Type: string

- `push_whitelist_deploy_keys` (optional)
  Type: boolean

- `push_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `push_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `require_signed_commits` (optional)
  Type: boolean

- `required_approvals` (optional)
  Type: integer, int64

- `rule_name` (optional)
  Type: string
  
  RuleName is the name of the branch protection rule

- `status_check_contexts` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `unprotected_file_patterns` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branch_protections/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "approvals_whitelist_teams": [
    "string"
  ],
  "approvals_whitelist_username": [
    "string"
  ],
  "block_admin_merge_override": true,
  "block_on_codeowner_reviews": true,
  "block_on_official_review_requests": true,
  "block_on_outdated_branch": true,
  "block_on_rejected_reviews": true,
  "bypass_allowlist_teams": [
    "string"
  ],
  "bypass_allowlist_usernames": [
    "string"
  ],
  "dismiss_stale_approvals": true,
  "enable_approvals_whitelist": true,
  "enable_bypass_allowlist": true,
  "enable_force_push": true,
  "enable_force_push_allowlist": true,
  "enable_merge_whitelist": true,
  "enable_push": true,
  "enable_push_whitelist": true,
  "enable_status_check": true,
  "force_push_allowlist_deploy_keys": true,
  "force_push_allowlist_teams": [
    "string"
  ],
  "force_push_allowlist_usernames": [
    "string"
  ],
  "ignore_stale_approvals": true,
  "merge_whitelist_teams": [
    "string"
  ],
  "merge_whitelist_usernames": [
    "string"
  ],
  "priority": 0,
  "protected_file_patterns": "string",
  "push_whitelist_deploy_keys": true,
  "push_whitelist_teams": [
    "string"
  ],
  "push_whitelist_usernames": [
    "string"
  ],
  "require_signed_commits": true,
  "required_approvals": 0,
  "status_check_contexts": [
    "string"
  ],
  "unprotected_file_patterns": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "approvals_whitelist_teams": [
    "string"
  ],
  "approvals_whitelist_username": [
    "string"
  ],
  "block_admin_merge_override": true,
  "block_on_codeowner_reviews": true,
  "block_on_official_review_requests": true,
  "block_on_outdated_branch": true,
  "block_on_rejected_reviews": true,
  "bypass_allowlist_teams": [
    "string"
  ],
  "bypass_allowlist_usernames": [
    "string"
  ],
  "dismiss_stale_approvals": true,
  "enable_approvals_whitelist": true,
  "enable_bypass_allowlist": true,
  "enable_force_push": true,
  "enable_force_push_allowlist": true,
  "enable_merge_whitelist": true,
  "enable_push": true,
  "enable_push_whitelist": true,
  "enable_status_check": true,
  "force_push_allowlist_deploy_keys": true,
  "force_push_allowlist_teams": [
    "string"
  ],
  "force_push_allowlist_usernames": [
    "string"
  ],
  "ignore_stale_approvals": true,
  "merge_whitelist_teams": [
    "string"
  ],
  "merge_whitelist_usernames": [
    "string"
  ],
  "priority": 0,
  "protected_file_patterns": "string",
  "push_whitelist_deploy_keys": true,
  "push_whitelist_teams": [
    "string"
  ],
  "push_whitelist_usernames": [
    "string"
  ],
  "require_signed_commits": true,
  "required_approvals": 0,
  "status_check_contexts": [
    "string"
  ],
  "unprotected_file_patterns": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branch_protections/string', {
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
  "approvals_whitelist_teams": [
    "string"
  ],
  "approvals_whitelist_username": [
    "string"
  ],
  "block_admin_merge_override": true,
  "block_on_codeowner_reviews": true,
  "block_on_official_review_requests": true,
  "block_on_outdated_branch": true,
  "block_on_rejected_reviews": true,
  "bypass_allowlist_teams": [
    "string"
  ],
  "bypass_allowlist_usernames": [
    "string"
  ],
  "dismiss_stale_approvals": true,
  "enable_approvals_whitelist": true,
  "enable_bypass_allowlist": true,
  "enable_force_push": true,
  "enable_force_push_allowlist": true,
  "enable_merge_whitelist": true,
  "enable_push": true,
  "enable_push_whitelist": true,
  "enable_status_check": true,
  "force_push_allowlist_deploy_keys": true,
  "force_push_allowlist_teams": [
    "string"
  ],
  "force_push_allowlist_usernames": [
    "string"
  ],
  "ignore_stale_approvals": true,
  "merge_whitelist_teams": [
    "string"
  ],
  "merge_whitelist_usernames": [
    "string"
  ],
  "priority": 0,
  "protected_file_patterns": "string",
  "push_whitelist_deploy_keys": true,
  "push_whitelist_teams": [
    "string"
  ],
  "push_whitelist_usernames": [
    "string"
  ],
  "require_signed_commits": true,
  "required_approvals": 0,
  "status_check_contexts": [
    "string"
  ],
  "unprotected_file_patterns": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/branch_protections/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
