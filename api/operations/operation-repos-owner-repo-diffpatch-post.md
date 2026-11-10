# Apply diff patch to repository

`POST /repos/{owner}/{repo}/diffpatch`

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

Request body: application/json (required)

Type: ApplyDiffPatchFileOptions

ApplyDiffPatchFileOptions options for applying a diff patch
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

Schema: [ApplyDiffPatchFileOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/applydiffpatchfileoptions.md)

- `author` (optional)
  Reference: [Identity](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/identity.md); Type: Identity
  
  Identity for a person's identity like an author or committer

- `branch` (optional)
  Type: string
  
  branch (optional) is the base branch for the changes. If not supplied, the default branch is used

- `committer` (optional)
  Reference: [Identity](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/identity.md); Type: Identity
  
  Identity for a person's identity like an author or committer

- `content` (required)
  Type: string

- `dates` (optional)
  Reference: [CommitDateOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitdateoptions.md); Type: CommitDateOptions
  
  CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE

- `force_push` (optional)
  Type: boolean
  
  force_push (optional) will do a force-push if the new branch already exists

- `message` (optional)
  Type: string
  
  message (optional) is the commit message of the changes. If not supplied, a default message will be used

- `new_branch` (optional)
  Type: string
  
  new_branch (optional) will make a new branch from base branch for the changes. If not supplied, the changes will be committed to the base branch

- `signoff` (optional)
  Type: boolean
  
  Add a Signed-off-by trailer by the committer at the end of the commit log message.

Responses:

- 200: FileResponse

Content type: application/json

Type: FileResponse

FileResponse contains information about a repo's file

Schema: [FileResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/fileresponse.md)

- `commit` (optional)
  Reference: [FileCommitResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filecommitresponse.md); Type: FileCommitResponse

- `content` (optional)
  Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
  
  ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit

- 404: APINotFound is a not found empty response

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/diffpatch' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "author": {
    "email": "user@example.com",
    "name": "string"
  },
  "branch": "string",
  "committer": {
    "email": "user@example.com",
    "name": "string"
  },
  "content": "string",
  "dates": {
    "author": "2024-01-15T09:30:00Z",
    "committer": "2024-01-15T09:30:00Z"
  },
  "force_push": true,
  "message": "string",
  "new_branch": "string",
  "signoff": true
}'
```

### JavaScript

```javascript
const body = `{
  "author": {
    "email": "user@example.com",
    "name": "string"
  },
  "branch": "string",
  "committer": {
    "email": "user@example.com",
    "name": "string"
  },
  "content": "string",
  "dates": {
    "author": "2024-01-15T09:30:00Z",
    "committer": "2024-01-15T09:30:00Z"
  },
  "force_push": true,
  "message": "string",
  "new_branch": "string",
  "signoff": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/diffpatch', {
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
  "author": {
    "email": "user@example.com",
    "name": "string"
  },
  "branch": "string",
  "committer": {
    "email": "user@example.com",
    "name": "string"
  },
  "content": "string",
  "dates": {
    "author": "2024-01-15T09:30:00Z",
    "committer": "2024-01-15T09:30:00Z"
  },
  "force_push": true,
  "message": "string",
  "new_branch": "string",
  "signoff": true
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/diffpatch',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
