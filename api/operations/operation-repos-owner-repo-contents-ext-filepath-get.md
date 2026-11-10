# The extended "contents" API, to get file metadata and/or content, or list a directory.

`GET /repos/{owner}/{repo}/contents-ext/{filepath}`

It guarantees that only one of the response fields is set if the request succeeds. Users can pass "includes=file_content" or "includes=lfs_metadata" to retrieve more fields. "includes=file_content" only works for single file, if you need to retrieve file contents in batch, use "file-contents" API after listing the directory.

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

- `filepath` (path, string, required) - path of the dir, file, symlink or submodule in the repo. Swagger requires path parameter to be "required", you can leave it empty or pass a single dot (".") to get the root directory.
  Type: string

- `ref` (query, string, optional) - the name of the commit/branch/tag, default to the repository’s default branch.
  Type: string

- `includes` (query, string, optional) - By default this API's response only contains file's metadata. Use comma-separated "includes" options to retrieve more fields. Option "file_content" will try to retrieve the file content, "lfs_metadata" will try to retrieve LFS metadata, "commit_metadata" will try to retrieve commit metadata, and "commit_message" will try to retrieve commit message.
  Type: string

Responses:

- 200: 

Content type: application/json

Type: ContentsExtResponse

Schema: [ContentsExtResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsextresponse.md)

- `dir_contents` (optional)
  Type: Array<ContentsResponse>
  
  DirContents contains directory listing when the path represents a directory
  
  Items:
    Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
    
    ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- `file_contents` (optional)
  Reference: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md); Type: ContentsResponse
  
  ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents-ext/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents-ext/string', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/contents-ext/string',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
