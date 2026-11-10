# Edit a wiki page

`PATCH /repos/{owner}/{repo}/wiki/page/{pageName}`

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

Request body: application/json

Type: CreateWikiPageOptions

CreateWikiPageOptions form for creating wiki

Schema: [CreateWikiPageOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createwikipageoptions.md)

- `content_base64` (optional)
  Type: string
  
  content must be base64 encoded

- `message` (optional)
  Type: string
  
  optional commit message summarizing the change

- `title` (optional)
  Type: string
  
  page title. leave empty to keep unchanged

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

- 400: APIError is error format response

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "content_base64": "string",
  "message": "string",
  "title": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "content_base64": "string",
  "message": "string",
  "title": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string', {
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
  "content_base64": "string",
  "message": "string",
  "title": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/wiki/page/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
