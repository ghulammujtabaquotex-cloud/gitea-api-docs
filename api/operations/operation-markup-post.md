# Render a markup document as HTML

`POST /markup`

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

Request body: application/json

Type: MarkupOption

MarkupOption markup options

Schema: [MarkupOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/markupoption.md)

- `Context` (optional)
  Type: string
  
  URL path for rendering issue, media and file links
  Expected format: /subpath/{user}/{repo}/src/{branch, commit, tag}/{identifier/path}/{file/dir}

- `FilePath` (optional)
  Type: string
  
  File path for detecting extension in file mode

- `Mode` (optional)
  Type: string
  
  Mode to render (markdown, comment, wiki, file)

- `Text` (optional)
  Type: string
  
  Text markup to render

- `Wiki` (optional)
  Type: boolean
  
  Is it a wiki page? (use mode=wiki instead)

Responses:

- 200: MarkupRender is a rendered markup document

Content type: application/json

Type: string

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/markup' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "Context": "string",
  "FilePath": "string",
  "Mode": "string",
  "Text": "string",
  "Wiki": true
}'
```

### JavaScript

```javascript
const body = `{
  "Context": "string",
  "FilePath": "string",
  "Mode": "string",
  "Text": "string",
  "Wiki": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/markup', {
  method: 'POST',
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
  "Context": "string",
  "FilePath": "string",
  "Mode": "string",
  "Text": "string",
  "Wiki": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/markup',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
