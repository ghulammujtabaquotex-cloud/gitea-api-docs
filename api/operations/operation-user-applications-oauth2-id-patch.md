# update an OAuth2 Application, this includes regenerating the client secret

`PATCH /user/applications/oauth2/{id}`

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

- `id` (path, integer, int64, required) - application to be updated
  Type: integer, int64

Request body: application/json (required)

Type: CreateOAuth2ApplicationOptions

CreateOAuth2ApplicationOptions holds options to create an oauth2 application

Schema: [CreateOAuth2ApplicationOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createoauth2applicationoptions.md)

- `confidential_client` (optional)
  Type: boolean
  
  Whether the client is confidential

- `name` (optional)
  Type: string
  
  The name of the OAuth2 application

- `redirect_uris` (optional)
  Type: Array<string>
  
  The list of allowed redirect URIs
  
  Items:
    Type: string

- `skip_secondary_authorization` (optional)
  Type: boolean
  
  Whether to skip secondary authorization

Responses:

- 200: OAuth2Application

Content type: application/json

Type: OAuth2Application

Schema: [OAuth2Application](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/oauth2application.md)

- `client_id` (optional)
  Type: string
  
  The client ID of the OAuth2 application

- `client_secret` (optional)
  Type: string
  
  The client secret of the OAuth2 application

- `confidential_client` (optional)
  Type: boolean
  
  Whether the client is confidential

- `created` (optional)
  Type: string, date-time
  
  The timestamp when the application was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the OAuth2 application

- `name` (optional)
  Type: string
  
  The name of the OAuth2 application

- `redirect_uris` (optional)
  Type: Array<string>
  
  The list of allowed redirect URIs
  
  Items:
    Type: string

- `skip_secondary_authorization` (optional)
  Type: boolean
  
  Whether to skip secondary authorization

- 400: APIError is error format response

- 404: APINotFound is a not found empty response

## Examples

### cURL

```bash
curl -X PATCH 'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/applications/oauth2/0' \
  -H 'Authorization: Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE' \
  -H 'Content-Type: application/json' \
  --data-raw '{
  "confidential_client": true,
  "name": "string",
  "redirect_uris": [
    "string"
  ],
  "skip_secondary_authorization": true
}'
```

### JavaScript

```javascript
const body = `{
  "confidential_client": true,
  "name": "string",
  "redirect_uris": [
    "string"
  ],
  "skip_secondary_authorization": true
}`;

const response = await fetch('https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/applications/oauth2/0', {
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
  "confidential_client": true,
  "name": "string",
  "redirect_uris": [
    "string"
  ],
  "skip_secondary_authorization": true
}'''

response = requests.patch(
    'https://ghulammujtabaquotex-cloud.github.io/GITEA-API-APP-SUBURL/api/v1/user/applications/oauth2/0',
    data=body.encode('utf-8'),
    headers={
        'Authorization': 'Basic WU9VUl9VU0VSTkFNRTpZT1VSX1BBU1NXT1JE',
        'Content-Type': 'application/json',
    },
)
print(response.text)
```
