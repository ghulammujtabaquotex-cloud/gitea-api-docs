# Get instance's global settings for repositories

`GET /settings/repository`

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

- 200: GeneralRepoSettings

Content type: application/json

Type: GeneralRepoSettings

GeneralRepoSettings contains global repository settings exposed by API

Schema: [GeneralRepoSettings](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/generalreposettings.md)

- `http_git_disabled` (optional)
  Type: boolean
  
  HTTPGitDisabled indicates if HTTP Git operations are disabled

- `lfs_disabled` (optional)
  Type: boolean
  
  LFSDisabled indicates if Git LFS support is disabled

- `migrations_disabled` (optional)
  Type: boolean
  
  MigrationsDisabled indicates if repository migrations are disabled

- `mirrors_disabled` (optional)
  Type: boolean
  
  MirrorsDisabled indicates if repository mirroring is disabled

- `stars_disabled` (optional)
  Type: boolean
  
  StarsDisabled indicates if repository starring is disabled

- `time_tracking_disabled` (optional)
  Type: boolean
  
  TimeTrackingDisabled indicates if time tracking is disabled

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/repository' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/repository', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/settings/repository',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
