# Get instance's global settings for api

`GET /settings/api`

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

Responses:

- 200: GeneralAPISettings

Content type: application/json

Type: GeneralAPISettings

GeneralAPISettings contains global api settings exposed by it

Schema: [GeneralAPISettings](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/generalapisettings.md)

- `default_git_trees_per_page` (optional)
  Type: integer, int64
  
  DefaultGitTreesPerPage is the default number of Git tree items per page

- `default_max_blob_size` (optional)
  Type: integer, int64
  
  DefaultMaxBlobSize is the default maximum blob size for API responses

- `default_max_response_size` (optional)
  Type: integer, int64
  
  DefaultMaxResponseSize is the default maximum response size

- `default_paging_num` (optional)
  Type: integer, int64
  
  DefaultPagingNum is the default number of items per page

- `max_response_items` (optional)
  Type: integer, int64
  
  MaxResponseItems is the maximum number of items returned in API responses

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/api' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/api', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/api',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
