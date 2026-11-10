# CurrentAccessToken

Type: CurrentAccessToken

Schema: [CurrentAccessToken](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/currentaccesstoken.md)

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

- `user` (optional)
  Reference: [UserMeta](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usermeta.md); Type: UserMeta