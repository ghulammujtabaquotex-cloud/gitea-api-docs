# Edit a tag protections for a repository. Only fields that are set will be changed

`PATCH /repos/{owner}/{repo}/tag_protections/{id}`

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

- `id` (path, integer, required) - id of protected tag
  Type: integer

Request body: application/json

Type: EditTagProtectionOption

EditTagProtectionOption options for editing a tag protection

Schema: [EditTagProtectionOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/edittagprotectionoption.md)

- `name_pattern` (optional)
  Type: string
  
  The pattern to match tag names for protection

- `whitelist_teams` (optional)
  Type: Array<string>
  
  List of team names allowed to create/delete protected tags
  
  Items:
    Type: string

- `whitelist_usernames` (optional)
  Type: Array<string>
  
  List of usernames allowed to create/delete protected tags
  
  Items:
    Type: string

Responses:

- 200: TagProtection

Content type: application/json

Type: TagProtection

TagProtection represents a tag protection

Schema: [TagProtection](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/tagprotection.md)

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the tag protection was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the tag protection

- `name_pattern` (optional)
  Type: string
  
  The pattern to match tag names for protection

- `updated_at` (optional)
  Type: string, date-time
  
  The date and time when the tag protection was last updated

- `whitelist_teams` (optional)
  Type: Array<string>
  
  List of team names allowed to create/delete protected tags
  
  Items:
    Type: string

- `whitelist_usernames` (optional)
  Type: Array<string>
  
  List of usernames allowed to create/delete protected tags
  
  Items:
    Type: string

- 404: APINotFound is a not found empty response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tag_protections/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "name_pattern": "string",
  "whitelist_teams": [
    "string"
  ],
  "whitelist_usernames": [
    "string"
  ]
}'
```

### JavaScript

```javascript
const body = `{
  "name_pattern": "string",
  "whitelist_teams": [
    "string"
  ],
  "whitelist_usernames": [
    "string"
  ]
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tag_protections/0', {
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
  "name_pattern": "string",
  "whitelist_teams": [
    "string"
  ],
  "whitelist_usernames": [
    "string"
  ]
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tag_protections/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
