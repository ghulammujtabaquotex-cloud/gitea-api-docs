# Merge a pull request

`POST /repos/{owner}/{repo}/pulls/{index}/merge`

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

- `index` (path, integer, int64, required) - index of the pull request to merge
  Type: integer, int64

Request body: application/json

Type: MergePullRequestOption

MergePullRequestForm form for merging Pull Request

Schema: [MergePullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/mergepullrequestoption.md)

- `delete_branch_after_merge` (optional)
  Type: boolean

- `do` (required)
  Type: string
  
  enum: ["merge","rebase","rebase-merge","squash","fast-forward-only","manually-merged"]

- `force_merge` (optional)
  Type: boolean

- `head_commit_id` (optional)
  Type: string

- `merge_commit_id` (optional)
  Type: string

- `merge_message_field` (optional)
  Type: string

- `merge_title_field` (optional)
  Type: string

- `merge_when_checks_succeed` (optional)
  Type: boolean

Responses:

- 200: APIEmpty is an empty response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 405: APIEmpty is an empty response

- 409: APIError is error format response

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/merge' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "delete_branch_after_merge": true,
  "do": "merge",
  "force_merge": true,
  "head_commit_id": "string",
  "merge_commit_id": "string",
  "merge_message_field": "string",
  "merge_title_field": "string",
  "merge_when_checks_succeed": true
}'
```

### JavaScript

```javascript
const body = `{
  "delete_branch_after_merge": true,
  "do": "merge",
  "force_merge": true,
  "head_commit_id": "string",
  "merge_commit_id": "string",
  "merge_message_field": "string",
  "merge_title_field": "string",
  "merge_when_checks_succeed": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/merge', {
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
  "delete_branch_after_merge": true,
  "do": "merge",
  "force_merge": true,
  "head_commit_id": "string",
  "merge_commit_id": "string",
  "merge_message_field": "string",
  "merge_title_field": "string",
  "merge_when_checks_succeed": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/pulls/0/merge',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
