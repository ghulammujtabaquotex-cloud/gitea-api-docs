# Get commit comparison information

`GET /repos/{owner}/{repo}/compare/{basehead}`

By default returns JSON commit comparison information. The raw diff or patch can be
requested with the `output` query parameter set to `diff` or `patch` respectively.


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

- `basehead` (path, string, required) - compare two refs as `base...head` (or `base..head`); refs may be branches, tags, full or short SHAs (including branch names that contain slashes), optionally with a `^` or `~N` revision suffix.
  Type: string

- `output` (query, string, optional) - return the raw comparison as `diff` or `patch` instead of JSON
  Type: string
  
  enum: ["diff","patch"]

- `verification` (query, boolean, optional) - include verification for every commit (disable for speedup, default 'true')
  Type: boolean

- `files` (query, boolean, optional) - include a list of affected files for every commit (disable for speedup, default 'true')
  Type: boolean

Responses:

- 200: 

Content type: application/json

Type: Compare

Schema: [Compare](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/compare.md)

- `commits` (optional)
  Type: Array<Commit>
  
  Items:
    Reference: [Commit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commit.md); Type: Commit

- `total_commits` (optional)
  Type: integer, int64

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/compare/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/compare/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/compare/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
