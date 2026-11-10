# Get a release by tag name

`GET /repos/{owner}/{repo}/releases/tags/{tag}`

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

- `tag` (path, string, required) - tag name of the release to get
  Type: string

Responses:

- 200: Release

Content type: application/json

Type: Release

Release represents a repository release

Schema: [Release](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/release.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  The files attached to the release
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `author` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `body` (optional)
  Type: string
  
  The release notes or description

- `created_at` (optional)
  Type: string, date-time

- `draft` (optional)
  Type: boolean
  
  Whether the release is a draft

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the release

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the release

- `name` (optional)
  Type: string
  
  The display title of the release

- `prerelease` (optional)
  Type: boolean
  
  Whether the release is a prerelease

- `published_at` (optional)
  Type: string, date-time

- `tag_name` (optional)
  Type: string
  
  The name of the git tag associated with the release

- `tarball_url` (optional)
  Type: string, uri
  
  The URL to download the tarball archive

- `target_commitish` (optional)
  Type: string
  
  The target commitish for the release

- `upload_url` (optional)
  Type: string, uri
  
  The URL template for uploading release assets

- `url` (optional)
  Type: string, uri
  
  The API URL of the release

- `zipball_url` (optional)
  Type: string, uri
  
  The URL to download the zip archive

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/tags/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/tags/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/tags/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
