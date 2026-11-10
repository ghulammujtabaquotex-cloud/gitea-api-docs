# Get a wiki page

`GET /repos/{owner}/{repo}/wiki/page/{pageName}`

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

- `pageName` (path, string, required) - name of the page
  Type: string

Responses:

- 200: WikiPage

Content type: application/json

Type: WikiPage

WikiPage a wiki page

Schema: [WikiPage](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikipage.md)

- `commit_count` (optional)
  Type: integer, int64
  
  The number of commits that modified this page

- `content_base64` (optional)
  Type: string
  
  Page content, base64 encoded

- `footer` (optional)
  Type: string
  
  The footer content for the wiki page

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the wiki page

- `last_commit` (optional)
  Reference: [WikiCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikicommit.md); Type: WikiCommit
  
  WikiCommit page commit/revision

- `sidebar` (optional)
  Type: string
  
  The sidebar content for the wiki page

- `sub_url` (optional)
  Type: string, uri
  
  The sub URL path for the wiki page

- `title` (optional)
  Type: string
  
  The title of the wiki page

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
