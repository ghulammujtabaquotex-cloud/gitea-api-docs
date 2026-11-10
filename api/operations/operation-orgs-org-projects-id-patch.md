# Edit a project

`PATCH /orgs/{org}/projects/{id}`

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

- `id` (path, integer, int64, required) - id of the project
  Type: integer, int64

Request body: application/json

Type: EditProjectOption

EditProjectOption represents options for editing a project

Schema: [EditProjectOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editprojectoption.md)

- `card_type` (optional)
  Type: string
  
  Card type: "text_only" or "images_and_text"

- `description` (optional)
  Type: string

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `title` (optional)
  Type: string

Responses:

- 200: Project

Content type: application/json

Type: Project

Projects track issues and pull requests, standalone note cards are not supported.

Schema: [Project](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/project.md)

- `card_type` (optional)
  Type: string
  
  Card type: "text_only" or "images_and_text"

- `closed_at` (optional)
  Type: string, date-time

- `created_at` (optional)
  Type: string, date-time

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `creator_id` (optional)
  Type: integer, int64
  
  Deprecated: use Creator instead
  
  deprecated: true

- `description` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `is_closed` (optional)
  Type: boolean
  
  Deprecated: use State instead
  
  deprecated: true

- `num_closed_issues` (optional)
  Type: integer, int64

- `num_issues` (optional)
  Type: integer, int64

- `num_open_issues` (optional)
  Type: integer, int64

- `owner_id` (optional)
  Type: integer, int64

- `repo_id` (optional)
  Type: integer, int64

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `template_type` (optional)
  Type: string
  
  Template type: "none", "basic_kanban" or "bug_triage"

- `title` (optional)
  Type: string

- `type` (optional)
  Type: string
  
  Project type: "individual", "repository" or "organization"

- `updated_at` (optional)
  Type: string, date-time
  
  null only for legacy rows that carry no update timestamp

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "card_type": "string",
  "description": "string",
  "state": "open",
  "title": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "card_type": "string",
  "description": "string",
  "state": "open",
  "title": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0', {
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
  "card_type": "string",
  "description": "string",
  "state": "open",
  "title": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/orgs/string/projects/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
