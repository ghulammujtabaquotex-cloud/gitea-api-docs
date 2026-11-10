# AccessToken

Type: AccessToken

Schema: [AccessToken](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/accesstoken.md)

- `created_at` (optional)
  Type: string, date-time
  
  The timestamp when the token was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the access token

- `last_used_at` (optional)
  Type: string, date-time
  
  The timestamp when the token was last used

- `name` (optional)
  Type: string
  
  The name of the access token

- `scopes` (optional)
  Type: Array<string>
  
  The scopes granted to this access token
  
  Items:
    Type: string

- `sha1` (optional)
  Type: string
  
  The SHA1 hash of the access token

- `token_last_eight` (optional)
  Type: string
  
  The last eight characters of the token