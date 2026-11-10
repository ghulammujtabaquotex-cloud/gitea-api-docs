# EditOrgOption

Type: EditOrgOption

EditOrgOption options for editing an organization

Schema: [EditOrgOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editorgoption.md)

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization; use empty string to clear

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `visibility` (optional)
  Type: VisibilityString
  
  possible values are `public`, `limited` or `private`
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization