# Get a single commit from a repository, it has a GitHub-compatible alias "/repos/{owner}/{repo}/commits/{ref}"

`GET /repos/{owner}/{repo}/git/commits/{sha}`

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

- `sha` (path, string, required) - a git ref or commit sha
  Type: string

- `stat` (query, boolean, optional) - include diff stats for every commit (disable for speedup, default 'true')
  Type: boolean

- `verification` (query, boolean, optional) - include verification for every commit (disable for speedup, default 'true')
  Type: boolean

- `files` (query, boolean, optional) - include a list of affected files for every commit (disable for speedup, default 'true')
  Type: boolean

Responses:

- 200: Commit

Content type: application/json

Type: Commit

Schema: [Commit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commit.md)

- `author` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `commit` (optional)
  Reference: [RepoCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repocommit.md); Type: RepoCommit

- `committer` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `created` (optional)
  Type: string, date-time
  
  Created is the time when the commit was created

- `files` (optional)
  Type: Array<CommitAffectedFiles>
  
  Files contains information about files affected by the commit
  
  Items:
    Reference: [CommitAffectedFiles](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitaffectedfiles.md); Type: CommitAffectedFiles
    
    CommitAffectedFiles store information about files affected by the commit

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the commit

- `parents` (optional)
  Type: Array<CommitMeta>
  
  Parents contains the parent commit information
  
  Items:
    Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `sha` (optional)
  Type: string
  
  SHA is the commit SHA hash

- `stats` (optional)
  Reference: [CommitStats](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitstats.md); Type: CommitStats
  
  CommitStats is statistics for a RepoCommit

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for the commit

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/commits/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/commits/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/commits/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
