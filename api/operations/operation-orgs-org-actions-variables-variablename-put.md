# Update an org-level variable

`PUT /orgs/{org}/actions/variables/{variablename}`

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

- `org` (path, string, required) - name of the organization
  Type: string

- `variablename` (path, string, required) - name of the variable
  Type: string

Request body: application/json

Type: UpdateVariableOption

UpdateVariableOption the option when updating variable

Schema: [UpdateVariableOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/updatevariableoption.md)

- `description` (optional)
  Type: string
  
  Description of the variable to update

- `name` (optional)
  Type: string
  
  New name for the variable. If the field is empty, the variable name won't be updated.

- `value` (required)
  Type: string
  
  Value of the variable to update

Responses:

- 201: response when updating an org-level variable

- 204: response when updating an org-level variable

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X PUT 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "description": "string",
  "name": "string",
  "value": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "description": "string",
  "name": "string",
  "value": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string', {
  method: 'PUT',
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
  "name": "string",
  "value": "string"
}'''

response = requests.put(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
