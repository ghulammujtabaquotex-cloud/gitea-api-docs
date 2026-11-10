# Get a list of all commits from a repository

`GET /repos/{owner}/{repo}/commits`

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

- `sha` (query, string, optional) - SHA or branch to start listing commits from (usually 'master')
  Type: string

- `path` (query, string, optional) - filepath of a file/dir
  Type: string

- `since` (query, string, date-time, optional) - Only commits after this date will be returned (ISO 8601 format)
  Type: string, date-time

- `until` (query, string, date-time, optional) - Only commits before this date will be returned (ISO 8601 format)
  Type: string, date-time

- `stat` (query, boolean, optional) - include diff stats for every commit (disable for speedup, default 'true')
  Type: boolean

- `verification` (query, boolean, optional) - include verification for every commit (disable for speedup, default 'true')
  Type: boolean

- `files` (query, boolean, optional) - include a list of affected files for every commit (disable for speedup, default 'true')
  Type: boolean

- `page` (query, integer, optional) - page number of results to return (1-based)
  Type: integer

- `limit` (query, integer, optional) - page size of results (ignored if used with 'path')
  Type: integer

- `not` (query, string, optional) - commits that match the given specifier will not be listed.
  Type: string

Responses:

- 200: CommitList

Content type: application/json

Type: Array<Commit>

Items:
  Reference: [Commit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commit.md); Type: Commit

- 404: APINotFound is a not found empty response

- 409: EmptyRepository

Content type: application/json

Type: APIError

APIError is an api error with a message

Schema: [APIError](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/apierror.md)

- `message` (optional)
  Type: string
  
  Message contains the error description

- `url` (optional)
  Type: string, uri
  
  URL contains the documentation URL for this error

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/commits' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/commits', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/commits',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
