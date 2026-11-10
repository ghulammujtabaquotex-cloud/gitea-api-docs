# Gets the blob of a repository.

`GET /repos/{owner}/{repo}/git/blobs/{sha}`

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

Responses:

- 200: GitBlobResponse

Content type: application/json

Type: GitBlobResponse

GitBlobResponse represents a git blob

Schema: [GitBlobResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gitblobresponse.md)

- `content` (optional)
  Type: string
  
  The content of the git blob (may be base64 encoded)

- `encoding` (optional)
  Type: string
  
  The encoding used for the content (e.g., "base64")

- `lfs_oid` (optional)
  Type: string
  
  The LFS object ID if this blob is stored in LFS

- `lfs_size` (optional)
  Type: integer, int64
  
  The size of the LFS object if this blob is stored in LFS

- `sha` (optional)
  Type: string
  
  The SHA hash of the git blob

- `size` (optional)
  Type: integer, int64
  
  The size of the git blob in bytes

- `url` (optional)
  Type: string, uri
  
  The URL to access this git blob

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/blobs/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/blobs/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/blobs/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
