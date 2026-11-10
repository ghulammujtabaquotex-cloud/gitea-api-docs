# Merge a branch from upstream

`POST /repos/{owner}/{repo}/merge-upstream`

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

Request body: application/json

Type: MergeUpstreamRequest

Schema: [MergeUpstreamRequest](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/mergeupstreamrequest.md)

- `branch` (optional)
  Type: string

- `ff_only` (optional)
  Type: boolean

Responses:

- 200: 

Content type: application/json

Type: MergeUpstreamResponse

Schema: [MergeUpstreamResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/mergeupstreamresponse.md)

- `merge_type` (optional)
  Type: string

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

- 409: APIError is error format response

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/merge-upstream' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "branch": "string",
  "ff_only": true
}'
```

### JavaScript

```javascript
const body = `{
  "branch": "string",
  "ff_only": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/merge-upstream', {
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
  "branch": "string",
  "ff_only": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/merge-upstream',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
