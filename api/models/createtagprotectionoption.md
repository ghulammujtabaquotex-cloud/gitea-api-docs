# CreateTagProtectionOption

Type: CreateTagProtectionOption

CreateTagProtectionOption options for creating a tag protection

Schema: [CreateTagProtectionOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createtagprotectionoption.md)

- `name_pattern` (optional)
  Type: string
  
  The pattern to match tag names for protection

- `whitelist_teams` (optional)
  Type: Array<string>
  
  List of team names allowed to create/delete protected tags
  
  Items:
    Type: string

- `whitelist_usernames` (optional)
  Type: Array<string>
  
  List of usernames allowed to create/delete protected tags
  
  Items:
    Type: string