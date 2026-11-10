# Create a hook

`POST /admin/hooks`

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

Request body: application/json (required)

Type: CreateHookOption

CreateHookOption options when create a hook

Schema: [CreateHookOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createhookoption.md)

- `active` (optional)
  Type: boolean
  
  Whether the webhook should be active upon creation
  
  default: false

- `authorization_header` (optional)
  Type: string
  
  Authorization header to include in webhook requests

- `branch_filter` (optional)
  Type: string
  
  Branch filter pattern to determine which branches trigger the webhook

- `config` (required)
  Reference: [CreateHookOptionConfig](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createhookoptionconfig.md); Type: CreateHookOptionConfig
  
  CreateHookOptionConfig has all config options in it
  required are "content_type" and "url" Required

- `events` (optional)
  Type: Array<string>
  
  List of events that will trigger this webhook
  
  Items:
    Type: string

- `name` (optional)
  Type: string
  
  Optional human-readable name for the webhook

- `type` (required)
  Type: string
  
  The type of the webhook to create
  
  enum: ["dingtalk","discord","gitea","gogs","msteams","slack","telegram","feishu","wechatwork","packagist"]

Responses:

- 201: Hook

Content type: application/json

Type: Hook

Hook a hook is a web hook when one repository changed

Schema: [Hook](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/hook.md)

- `active` (optional)
  Type: boolean
  
  Whether the webhook is active and will be triggered

- `authorization_header` (optional)
  Type: string
  
  Authorization header to include in webhook requests

- `branch_filter` (optional)
  Type: string
  
  Branch filter pattern to determine which branches trigger the webhook

- `config` (optional)
  Type: object
  
  Configuration settings for the webhook
  
  Additional properties: 
    Type: string

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the webhook was created

- `events` (optional)
  Type: Array<string>
  
  List of events that trigger this webhook
  
  Items:
    Type: string

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the webhook

- `name` (optional)
  Type: string
  
  Optional human-readable name for the webhook

- `type` (optional)
  Type: string
  
  The type of the webhook (e.g., gitea, slack, discord)

- `updated_at` (optional)
  Type: string, date-time
  
  The date and time when the webhook was last updated

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/hooks' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "active": false,
  "authorization_header": "string",
  "branch_filter": "string",
  "config": {},
  "events": [
    "string"
  ],
  "name": "string",
  "type": "dingtalk"
}'
```

### JavaScript

```javascript
const body = `{
  "active": false,
  "authorization_header": "string",
  "branch_filter": "string",
  "config": {},
  "events": [
    "string"
  ],
  "name": "string",
  "type": "dingtalk"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/hooks', {
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
  "active": false,
  "authorization_header": "string",
  "branch_filter": "string",
  "config": {},
  "events": [
    "string"
  ],
  "name": "string",
  "type": "dingtalk"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/admin/hooks',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
