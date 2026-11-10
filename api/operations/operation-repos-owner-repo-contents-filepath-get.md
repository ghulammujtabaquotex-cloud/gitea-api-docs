# Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir.

`GET /repos/{owner}/{repo}/contents/{filepath}`

This API follows GitHub's design, and it is not easy to use. Recommend users to use the "contents-ext" API instead.

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

- `filepath` (path, string, required) - path of the dir, file, symlink or submodule in the repo
  Type: string

- `ref` (query, string, optional) - The name of the commit/branch/tag. Default to the repository’s default branch.
  Type: string

Responses:

- 200: ContentsResponse

Content type: application/json

Type: ContentsResponse

ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

Schema: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md)

- `_links` (optional)
  Reference: [FileLinksResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filelinksresponse.md); Type: FileLinksResponse
  
  FileLinksResponse contains the links for a repo's file

- `content` (optional)
  Type: string
  
  `content` is populated when `type` is `file`, otherwise null

- `download_url` (optional)
  Type: string, uri
  
  DownloadURL is the direct download URL for this file

- `encoding` (optional)
  Type: string
  
  `encoding` is populated when `type` is `file`, otherwise null

- `git_url` (optional)
  Type: string, uri
  
  GitURL is the Git API URL for this blob or tree

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for this file or directory

- `last_author_date` (optional)
  Type: string, date-time

- `last_commit_message` (optional)
  Type: string
  
  LastCommitMessage is the message of the last commit that affected this file

- `last_commit_sha` (optional)
  Type: string
  
  LastCommitSHA is the SHA of the last commit that affected this file

- `last_committer_date` (optional)
  Type: string, date-time

- `lfs_oid` (optional)
  Type: string
  
  LfsOid is the Git LFS object ID if this file is stored in LFS

- `lfs_size` (optional)
  Type: integer, int64
  
  LfsSize is the file size if this file is stored in LFS

- `mode` (optional)
  Type: string
  
  `mode` is the Git file mode as an octal string, e.g. `100644` (regular), `100755` (executable), `120000` (symlink), `160000` (submodule)

- `name` (optional)
  Type: string
  
  Name is the file or directory name

- `path` (optional)
  Type: string
  
  Path is the full path to the file or directory

- `sha` (optional)
  Type: string
  
  SHA is the Git blob or tree SHA

- `size` (optional)
  Type: integer, int64
  
  Size is the file size in bytes

- `submodule_git_url` (optional)
  Type: string, uri
  
  `submodule_git_url` is populated when `type` is `submodule`, otherwise null

- `target` (optional)
  Type: string
  
  `target` is populated when `type` is `symlink`, otherwise null

- `type` (optional)
  Type: string
  
  `type` will be `file`, `dir`, `symlink`, or `submodule`

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this file or directory

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
