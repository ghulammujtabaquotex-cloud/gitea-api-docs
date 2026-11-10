# Update a release

`PATCH /repos/{owner}/{repo}/releases/{id}`

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

- `id` (path, integer, int64, required) - id of the release to edit
  Type: integer, int64

Request body: application/json

Type: EditReleaseOption

EditReleaseOption options when editing a release

Schema: [EditReleaseOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editreleaseoption.md)

- `body` (optional)
  Type: string
  
  The new release notes or description

- `draft` (optional)
  Type: boolean
  
  Whether to change the draft status

- `name` (optional)
  Type: string
  
  The new display title of the release

- `prerelease` (optional)
  Type: boolean
  
  Whether to change the prerelease status

- `tag_name` (optional)
  Type: string
  
  The new name of the git tag

- `target_commitish` (optional)
  Type: string
  
  The new target commitish for the release

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
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "body": "string",
  "draft": true,
  "name": "string",
  "prerelease": true,
  "tag_name": "string",
  "target_commitish": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "body": "string",
  "draft": true,
  "name": "string",
  "prerelease": true,
  "tag_name": "string",
  "target_commitish": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0', {
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
  "body": "string",
  "draft": true,
  "name": "string",
  "prerelease": true,
  "tag_name": "string",
  "target_commitish": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
