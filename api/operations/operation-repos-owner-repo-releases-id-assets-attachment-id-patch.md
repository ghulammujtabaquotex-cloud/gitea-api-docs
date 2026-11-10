# Edit a release attachment

`PATCH /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}`

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

- `id` (path, integer, int64, required) - id of the release
  Type: integer, int64

- `attachment_id` (path, integer, int64, required) - id of the attachment to edit
  Type: integer, int64

Request body: application/json

Type: EditAttachmentOptions

EditAttachmentOptions options for editing attachments

Schema: [EditAttachmentOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editattachmentoptions.md)

- `name` (optional)
  Type: string
  
  Name is the new filename for the attachment

Responses:

- 201: Attachment

Content type: application/json

Type: Attachment

Attachment a generic attachment

Schema: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md)

- `browser_download_url` (optional)
  Type: string, uri
  
  DownloadURL is the URL to download the attachment

- `created_at` (optional)
  Type: string, date-time
  
  Created is the time when the attachment was uploaded

- `download_count` (optional)
  Type: integer, int64
  
  DownloadCount is the number of times the attachment has been downloaded

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the attachment

- `name` (optional)
  Type: string
  
  Name is the filename of the attachment

- `size` (optional)
  Type: integer, int64
  
  Size is the file size in bytes

- `uuid` (optional)
  Type: string
  
  UUID is the unique identifier for the attachment file

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0/assets/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "name": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "name": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0/assets/0', {
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
  "name": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/releases/0/assets/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
