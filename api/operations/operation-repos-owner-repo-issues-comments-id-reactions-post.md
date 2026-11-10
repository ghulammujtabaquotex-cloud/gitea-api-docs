# Add a reaction to a comment of an issue

`POST /repos/{owner}/{repo}/issues/comments/{id}/reactions`

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

- `id` (path, integer, int64, required) - id of the comment to edit
  Type: integer, int64

Request body: application/json

Type: EditReactionOption

EditReactionOption contain the reaction type

Schema: [EditReactionOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editreactionoption.md)

- `content` (optional)
  Type: string
  
  The reaction content (e.g., emoji or reaction type)

Responses:

- 200: Reaction

Content type: application/json

Type: Reaction

Reaction contain one reaction

Schema: [Reaction](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/reaction.md)

- `content` (optional)
  Type: string
  
  The reaction content (e.g., emoji or reaction type)

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the reaction was created

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 201: Reaction

Content type: application/json

Type: Reaction

Reaction contain one reaction

Schema: [Reaction](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/reaction.md)

- `content` (optional)
  Type: string
  
  The reaction content (e.g., emoji or reaction type)

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the reaction was created

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/comments/0/reactions' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "content": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "content": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/comments/0/reactions', {
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
  "content": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/comments/0/reactions',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
