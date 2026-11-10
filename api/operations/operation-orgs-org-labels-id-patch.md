# Update a label

`PATCH /orgs/{org}/labels/{id}`

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

- `id` (path, integer, int64, required) - id of the label to edit
  Type: integer, int64

Request body: application/json

Type: EditLabelOption

EditLabelOption options for editing a label

Schema: [EditLabelOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editlabeloption.md)

- `color` (optional)
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

- `name` (optional)
  Type: string
  
  Name is the new display name for the label

Responses:

- 200: Label

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
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/labels/0' \
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

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/labels/0', {
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
  "color": "#00aabb",
  "description": "string",
  "exclusive": false,
  "is_archived": false,
  "name": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/labels/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
