# TagProtection

Type: TagProtection

TagProtection represents a tag protection

Schema: [TagProtection](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/tagprotection.md)

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the tag protection was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the tag protection

- `name_pattern` (optional)
  Type: string
  
  The pattern to match tag names for protection

- `updated_at` (optional)
  Type: string, date-time
  
  The date and time when the tag protection was last updated

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