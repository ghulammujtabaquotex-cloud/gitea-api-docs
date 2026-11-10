# Create a new git tag in a repository

`POST /repos/{owner}/{repo}/tags`

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

Type: CreateTagOption

CreateTagOption options when creating a tag

Schema: [CreateTagOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createtagoption.md)

- `message` (optional)
  Type: string
  
  The message to associate with the tag

- `tag_name` (required)
  Type: string
  
  The name of the tag to create

- `target` (optional)
  Type: string
  
  The target commit SHA or branch name for the tag

Responses:

- 200: Tag

Content type: application/json

Type: Tag

Tag represents a repository tag

Schema: [Tag](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/tag.md)

- `commit` (optional)
  Reference: [CommitMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitmeta.md); Type: CommitMeta

- `id` (optional)
  Type: string
  
  The ID (SHA) of the tag

- `message` (optional)
  Type: string
  
  The message associated with the tag

- `name` (optional)
  Type: string
  
  The name of the tag

- `tarball_url` (optional)
  Type: string, uri
  
  The URL to download the tarball archive

- `zipball_url` (optional)
  Type: string, uri
  
  The URL to download the zipball archive

- 404: APINotFound is a not found empty response

- 405: APIEmpty is an empty response

- 409: APIConflict is a conflict empty response

- 422: APIValidationError is error format response related to input validation

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tags' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "message": "string",
  "tag_name": "string",
  "target": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "message": "string",
  "tag_name": "string",
  "target": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tags', {
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
  "message": "string",
  "tag_name": "string",
  "target": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/tags',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
