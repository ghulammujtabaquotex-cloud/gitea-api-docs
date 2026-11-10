# Organization

Type: Organization

Organization represents an organization

Schema: [Organization](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/organization.md)

- `avatar_url` (optional)
  Type: string, uri
  
  The URL of the organization's avatar

- `description` (optional)
  Type: string
  
  The description of the organization

- `email` (optional)
  Type: string
  
  The email address of the organization

- `full_name` (optional)
  Type: string
  
  The full display name of the organization

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the organization

- `location` (optional)
  Type: string
  
  The location of the organization

- `name` (optional)
  Type: string
  
  The name of the organization

- `repo_admin_change_team_access` (optional)
  Type: boolean
  
  Whether repository administrators can change team access

- `username` (optional)
  Type: string
  
  username of the organization
  deprecated
  
  deprecated: true

- `visibility` (optional)
  Type: VisibilityString
  
  The visibility level of the organization (public, limited, private)
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The website URL of the organization