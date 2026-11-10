# Create a label

`POST /repos/{owner}/{repo}/labels`

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

Type: CreateLabelOption

CreateLabelOption options for creating a label

Schema: [CreateLabelOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createlabeloption.md)

- `color` (required)
  Type: string
  
  Example:
  
  ```json
  "#00aabb"
  ```

- `description` (optional)
  Type: string
  
  Description provides additional context about the label's purpose

- `exclusive` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `is_archived` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `name` (required)
  Type: string
  
  Name is the display name for the new label

Responses:

- 201: Label

Content type: application/json

Type: Label

Label a label to an issue or a pr

Schema: [Label](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/label.md)

- `color` (optional)
  Type: string
  
  Example:
  
  ```json
  "00aabb"
  ```

- `description` (optional)
  Type: string
  
  Description provides additional context about the label's purpose

- `exclusive` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the label

- `is_archived` (optional)
  Type: boolean
  
  Example:
  
  ```json
  false
  ```

- `name` (optional)
  Type: string
  
  Name is the display name of the label

- `url` (optional)
  Type: string, uri
  
  URL is the API endpoint for accessing this label

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/labels' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "color": "#00aabb",
  "description": "string",
  "exclusive": false,
  "is_archived": false,
  "name": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "color": "#00aabb",
  "description": "string",
  "exclusive": false,
  "is_archived": false,
  "name": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/labels', {
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
  "color": "#00aabb",
  "description": "string",
  "exclusive": false,
  "is_archived": false,
  "name": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/labels',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
