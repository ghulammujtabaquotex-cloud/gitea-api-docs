# Unblock the issue given in the body by the issue in path

`DELETE /repos/{owner}/{repo}/issues/{index}/blocks`

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

- `index` (path, string, required) - index of the issue
  Type: string

Request body: application/json

Type: IssueMeta

IssueMeta basic issue information

Schema: [IssueMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issuemeta.md)

- `index` (optional)
  Type: integer, int64

- `owner` (optional)
  Type: string
  
  owner of the issue's repo

- `repo` (optional)
  Type: string

Responses:

- 200: Issue

Content type: application/json

Type: Issue

Issue represents an issue in a repository

Schema: [Issue](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issue.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `assignee` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `assignees` (optional)
  Type: Array<User>
  
  Items:
    Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
    
    User represents a user

- `body` (optional)
  Type: string

- `closed_at` (optional)
  Type: string, date-time

- `comments` (optional)
  Type: integer, int64

- `content_version` (optional)
  Type: integer, int64
  
  The version of the issue content for optimistic locking

- `created_at` (optional)
  Type: string, date-time

- `due_date` (optional)
  Type: string, date-time

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `is_locked` (optional)
  Type: boolean

- `labels` (optional)
  Type: Array<Label>
  
  Items:
    Reference: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md); Type: Label
    
    Label a label to an issue or a pr

- `milestone` (optional)
  Reference: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md); Type: Milestone
  
  Milestone milestone is a collection of issues on one repository

- `number` (optional)
  Type: integer, int64

- `original_author` (optional)
  Type: string

- `original_author_id` (optional)
  Type: integer, int64

- `pin_order` (optional)
  Type: integer, int64

- `projects` (optional)
  Type: Array<Project>
  
  Items:
    Reference: [Project](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/project.md); Type: Project
    
    Projects track issues and pull requests, standalone note cards are not supported.

- `pull_request` (optional)
  Reference: [PullRequestMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullrequestmeta.md); Type: PullRequestMeta
  
  PullRequestMeta PR info if an issue is a PR

- `ref` (optional)
  Type: string

- `repository` (optional)
  Reference: [RepositoryMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repositorymeta.md); Type: RepositoryMeta
  
  RepositoryMeta basic repository information

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `time_estimate` (optional)
  Type: integer, int64

- `title` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X DELETE 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/string/blocks' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "index": 0,
  "owner": "string",
  "repo": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "index": 0,
  "owner": "string",
  "repo": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/string/blocks', {
  method: 'DELETE',
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
  "index": 0,
  "owner": "string",
  "repo": "string"
}'''

response = requests.delete(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/string/blocks',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
