# Search for repositories

`GET /repos/search`

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

- `q` (query, string, optional) - keyword
  Type: string

- `topic` (query, boolean, optional) - Limit search to repositories with keyword as topic
  Type: boolean

- `includeDesc` (query, boolean, optional) - include search of keyword within repository description
  Type: boolean

- `uid` (query, integer, int64, optional) - search only for repos that the user with the given id owns or contributes to
  Type: integer, int64

- `priority_owner_id` (query, integer, int64, optional) - repo owner to prioritize in the results
  Type: integer, int64

- `team_id` (query, integer, int64, optional) - search only for repos that belong to the given team id
  Type: integer, int64

- `starredBy` (query, integer, int64, optional) - search only for repos that the user with the given id has starred
  Type: integer, int64

- `private` (query, boolean, optional) - include private repositories this user has access to (defaults to true)
  Type: boolean

- `is_private` (query, boolean, optional) - show only pubic, private or all repositories (defaults to all)
  Type: boolean

- `template` (query, boolean, optional) - include template repositories this user has access to (defaults to true)
  Type: boolean

- `archived` (query, boolean, optional) - show only archived, non-archived or all repositories (defaults to all)
  Type: boolean

- `mode` (query, string, optional) - type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative"
  Type: string

- `exclusive` (query, boolean, optional) - if `uid` is given, search only for repos that the user owns
  Type: boolean

- `sort` (query, string, optional) - sort repos by attribute. Supported values are "alpha", "created", "updated", "size", "git_size", "lfs_size", "stars", "forks" and "id". Default is "alpha"
  Type: string

- `order` (query, string, optional) - sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.
  Type: string

- `page` (query, integer, optional) - page number of results to return (1-based)
  Type: integer

- `limit` (query, integer, optional) - page size of results
  Type: integer

Responses:

- 200: 

- 422: APIValidationError is error format response related to input validation

## Examples

### cURL

```bash
curl -X GET 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/search' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE'
```

### JavaScript

```javascript
const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/search', {
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
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/search',
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
    },
)
print(response.text)
```
