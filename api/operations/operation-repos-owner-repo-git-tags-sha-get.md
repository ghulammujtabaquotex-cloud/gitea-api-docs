# Gets the tag object of an annotated tag (not lightweight tags)

`GET /repos/{owner}/{repo}/git/tags/{sha}`

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

- `sha` (path, string, required) - sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.
  Type: string

Responses:

- 200: AnnotatedTag

Content type: application/json

Type: AnnotatedTag

AnnotatedTag represents an annotated tag

Schema: [AnnotatedTag](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/annotatedtag.md)

- `message` (optional)
  Type: string
  
  The message associated with the annotated tag

- `object` (optional)
  Reference: [AnnotatedTagObject](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/annotatedtagobject.md); Type: AnnotatedTagObject
  
  AnnotatedTagObject contains meta information of the tag object

- `sha` (optional)
  Type: string
  
  The SHA hash of the annotated tag

- `tag` (optional)
  Type: string
  
  The name of the annotated tag

- `tagger` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `url` (optional)
  Type: string, uri
  
  The URL to access the annotated tag

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/tags/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/tags/string', {
  method: 'GET',
  headers: {
    'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
  },
});

const data = await response.text();
```

### Python

```python
import requests

response = requests.get(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/git/tags/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
