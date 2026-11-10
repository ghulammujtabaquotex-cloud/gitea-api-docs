# Delete an org-level variable

`DELETE /orgs/{org}/actions/variables/{variablename}`

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

Responses:

- 200: ActionVariable

Content type: application/json

Type: ActionVariable

ActionVariable return value of the query API

Schema: [ActionVariable](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionvariable.md)

- `data` (optional)
  Type: string
  
  the value of the variable

- `description` (optional)
  Type: string
  
  the description of the variable

- `name` (optional)
  Type: string
  
  the name of the variable

- `owner_id` (optional)
  Type: integer, int64
  
  the owner to which the variable belongs

- `repo_id` (optional)
  Type: integer, int64
  
  the repository to which the variable belongs

- 201: response when deleting a variable

- 204: response when deleting a variable

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X DELETE 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.delete(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/actions/variables/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
