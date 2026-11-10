# EditTagProtectionOption

Type: EditTagProtectionOption

EditTagProtectionOption options for editing a tag protection

Schema: [EditTagProtectionOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/edittagprotectionoption.md)

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