# CreateOrgOption

Type: CreateOrgOption

CreateOrgOption options for creating an organization

Schema: [CreateOrgOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createorgoption.md)

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `username` (required)
  Type: string
  
  username of the organization

- `visibility` (optional)
  Type: VisibilityString
  
  possible values are `public` (default), `limited` or `private`
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization