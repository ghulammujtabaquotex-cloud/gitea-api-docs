# Update a user-level runner

`PATCH /user/actions/runners/{runner_id}`

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

- `runner_id` (path, string, required) - id of the runner
  Type: string

Request body: application/json

Type: EditActionRunnerOption

Schema: [EditActionRunnerOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editactionrunneroption.md)

- `disabled` (required)
  Type: boolean

Responses:

- 200: Runner

Content type: application/json

Type: ActionRunner

ActionRunner represents a Runner

Schema: [ActionRunner](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionrunner.md)

- `busy` (optional)
  Type: boolean

- `disabled` (optional)
  Type: boolean

- `ephemeral` (optional)
  Type: boolean

- `id` (optional)
  Type: integer, int64

- `labels` (optional)
  Type: Array<ActionRunnerLabel>
  
  Items:
    Reference: [ActionRunnerLabel](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionrunnerlabel.md); Type: ActionRunnerLabel
    
    ActionRunnerLabel represents a Runner Label

- `name` (optional)
  Type: string

- `status` (optional)
  Type: string

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/actions/runners/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "disabled": true
}'
```

### JavaScript

```javascript
const body = `{
  "disabled": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/actions/runners/string', {
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
  "disabled": true
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/actions/runners/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
