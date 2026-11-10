# CreateAccessTokenOption

Type: CreateAccessTokenOption

CreateAccessTokenOption options when create access token

Schema: [CreateAccessTokenOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createaccesstokenoption.md)

- `name` (required)
  Type: string

- `scopes` (optional)
  Type: Array<string>
  
  Example:
  
  ```json
  [
    "all",
    "read:activitypub",
    "read:issue",
    "write:misc",
    "read:notification",
    "read:organization",
    "read:package",
    "read:repository",
    "read:user"
  ]
  ```
  
  Items:
    Type: string