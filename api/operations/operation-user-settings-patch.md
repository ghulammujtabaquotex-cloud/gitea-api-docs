# Update user settings

`PATCH /user/settings`

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

Type: UserSettingsOptions

UserSettingsOptions represents options to change user settings

Schema: [UserSettingsOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usersettingsoptions.md)

- `description` (optional)
  Type: string

- `diff_view_style` (optional)
  Type: string

- `full_name` (optional)
  Type: string

- `hide_activity` (optional)
  Type: boolean

- `hide_email` (optional)
  Type: boolean
  
  Privacy

- `language` (optional)
  Type: string

- `location` (optional)
  Type: string

- `theme` (optional)
  Type: string

- `website` (optional)
  Type: string

Responses:

- 200: UserSettings

Content type: application/json

Type: UserSettings

UserSettings represents user settings

Schema: [UserSettings](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usersettings.md)

- `description` (optional)
  Type: string

- `diff_view_style` (optional)
  Type: string

- `full_name` (optional)
  Type: string

- `hide_activity` (optional)
  Type: boolean

- `hide_email` (optional)
  Type: boolean
  
  Privacy

- `language` (optional)
  Type: string

- `location` (optional)
  Type: string

- `theme` (optional)
  Type: string

- `website` (optional)
  Type: string

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/settings' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "description": "string",
  "diff_view_style": "string",
  "full_name": "string",
  "hide_activity": true,
  "hide_email": true,
  "language": "string",
  "location": "string",
  "theme": "string",
  "website": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "description": "string",
  "diff_view_style": "string",
  "full_name": "string",
  "hide_activity": true,
  "hide_email": true,
  "language": "string",
  "location": "string",
  "theme": "string",
  "website": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/settings', {
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
  "description": "string",
  "diff_view_style": "string",
  "full_name": "string",
  "hide_activity": true,
  "hide_email": true,
  "language": "string",
  "location": "string",
  "theme": "string",
  "website": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/settings',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
