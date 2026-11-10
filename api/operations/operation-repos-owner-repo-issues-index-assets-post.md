# Create an issue attachment

`POST /repos/{owner}/{repo}/issues/{index}/assets`

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

- `name` (query, string, optional) - name of the attachment
  Type: string

Request body: multipart/form-data

Type: object

- `attachment` (required)
  Type: string, binary
  
  attachment to upload

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

- 400: APIError is error format response

- 404: APIError is error format response

- 413: APIError is error format response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const form = new FormData();
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets', {
  method: 'POST',
  headers: {"Authorization":"Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE"},
  body: form,
});
console.log(await response.text());
```

### Python

```python
import requests
from contextlib import ExitStack

with ExitStack() as stack:
    files = [
    ]
    response = requests.request('POST', 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/assets', headers={"Authorization":"Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE"}, files=files)
    print(response.text)
```
