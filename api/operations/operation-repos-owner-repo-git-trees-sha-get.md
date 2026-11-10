# Gets the tree of a repository.

`GET /repos/{owner}/{repo}/git/trees/{sha}`

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

- `sha` (path, string, required) - sha of the commit
  Type: string

- `recursive` (query, boolean, optional) - show all directories and files
  Type: boolean

- `page` (query, integer, optional) - page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page
  Type: integer

- `per_page` (query, integer, optional) - number of items per page
  Type: integer

Responses:

- 200: GitTreeResponse

Content type: application/json

Type: GitTreeResponse

GitTreeResponse returns a git tree

Schema: [GitTreeResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gittreeresponse.md)

- `page` (optional)
  Type: integer, int64
  
  Page is the current page number for pagination

- `sha` (optional)
  Type: string
  
  SHA is the tree object SHA

- `total_count` (optional)
  Type: integer, int64
  
  TotalCount is the total number of entries in the tree

- `tree` (optional)
  Type: Array<GitEntry>
  
  Entries contains the tree entries (files and directories)
  
  Items:
    Reference: [GitEntry](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gitentry.md); Type: GitEntry
    
    GitEntry represents a git tree

- `truncated` (optional)
  Type: boolean
  
  Truncated indicates if the response was truncated due to size

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this tree

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/trees/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/trees/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/trees/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
