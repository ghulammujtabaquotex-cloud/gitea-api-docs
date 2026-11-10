# Update a milestone

`PATCH /repos/{owner}/{repo}/milestones/{id}`

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

- `id` (path, string, required) - the milestone to edit, identified by ID and if not available by name
  Type: string

Request body: application/json

Type: EditMilestoneOption

EditMilestoneOption options for editing a milestone

Schema: [EditMilestoneOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editmilestoneoption.md)

- `description` (optional)
  Type: string
  
  Description provides updated details about the milestone

- `due_on` (optional)
  Type: string, date-time
  
  Deadline is the due date for the milestone, use null or empty string to remove the deadline

- `state` (optional)
  Type: StateType
  
  State indicates the updated state of the milestone
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  Title is the updated title of the milestone

Responses:

- 200: Milestone

Content type: application/json

Type: Milestone

Milestone milestone is a collection of issues on one repository

Schema: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md)

- `closed_at` (optional)
  Type: string, date-time

- `closed_issues` (optional)
  Type: integer, int64
  
  ClosedIssues is the number of closed issues in this milestone

- `created_at` (optional)
  Type: string, date-time

- `description` (optional)
  Type: string
  
  Description provides details about the milestone

- `due_on` (optional)
  Type: string, date-time

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the milestone

- `open_issues` (optional)
  Type: integer, int64
  
  OpenIssues is the number of open issues in this milestone

- `state` (optional)
  Type: StateType
  
  State indicates if the milestone is open or closed
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  Title is the title of the milestone

- `updated_at` (optional)
  Type: string, date-time

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/milestones/string' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "description": "string",
  "due_on": "2024-01-15T09:30:00Z",
  "title": "string"
}'
```

### JavaScript

```javascript
const body = `{
  "description": "string",
  "due_on": "2024-01-15T09:30:00Z",
  "title": "string"
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/milestones/string', {
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
  "description": "string",
  "due_on": "2024-01-15T09:30:00Z",
  "title": "string"
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/repos/string/string/milestones/string',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
