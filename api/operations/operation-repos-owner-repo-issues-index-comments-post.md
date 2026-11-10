# Add a comment to an issue

`POST /repos/{owner}/{repo}/issues/{index}/comments`

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

- `index` (path, integer, int64, required) - index of the issue
  Type: integer, int64

Request body: application/json

Type: CreateIssueCommentOption

CreateIssueCommentOption options for creating a comment on an issue

Schema: [CreateIssueCommentOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createissuecommentoption.md)

- `body` (required)
  Type: string
  
  Body is the comment text content

Responses:

- 201: Comment

Content type: application/json

Type: Comment

Comment represents a comment on a commit or issue

Schema: [Comment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/comment.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  Attachments contains files attached to the comment
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `body` (optional)
  Type: string
  
  Body contains the comment text content

- `created_at` (optional)
  Type: string, date-time

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for viewing the comment

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the comment

- `issue_url` (optional)
  Type: string, uri
  
  IssueURL is the API URL for the issue

- `original_author` (optional)
  Type: string
  
  OriginalAuthor is the original author name (for imported comments)

- `original_author_id` (optional)
  Type: integer, int64
  
  OriginalAuthorID is the original author ID (for imported comments)

- `pull_request_url` (optional)
  Type: string, uri
  
  PRURL is the API URL for the pull request (if applicable)

- `updated_at` (optional)
  Type: string, date-time

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- 403: APIForbiddenError is a forbidden error response

- 404: APINotFound is a not found empty response

- 423: APIRepoArchivedError is an error that is raised when an archived repo should be modified

## Examples

### cURL

```bash
curl -X POST 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/comments' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "body": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "body": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/comments', {
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
  "body": "string"
}'''

response = requests.post(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/issues/0/comments',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
