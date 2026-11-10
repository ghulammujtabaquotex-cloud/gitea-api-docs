# Get an issue attachment

`GET /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}`

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

- `index` (path, integer, int64, required) - index of the issue
  Type: integer, int64

- `attachment_id` (path, integer, int64, required) - id of the attachment to get
  Type: integer, int64

Responses:

- 200: Attachment

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

- 404: APIError is error format response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets/0', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets/0',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
