# EditTeamOption

Type: EditTeamOption

EditTeamOption options for editing a team

Schema: [EditTeamOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editteamoption.md)

- `can_create_org_repo` (optional)
  Type: boolean
  
  Whether the team can create repositories in the organization

- `description` (optional)
  Type: string
  
  The description of the team

- `includes_all_repositories` (optional)
  Type: boolean
  
  Whether the team has access to all repositories in the organization

- `name` (required)
  Type: string

- `permission` (optional)
  Type: RepoWritePermission
  
  All units have this permission (read/write/admin)
  
  allOf:
    Reference: [RepoWritePermission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repowritepermission.md); Type: RepoWritePermission
    
    enum: ["read","write","admin"]

- `units` (optional)
  Type: Array<string>
  
  Deprecated: This variable should be replaced by UnitsMap and will be dropped in later versions.
  
  deprecated: true
  
  Example:
  
  ```json
  [
    "repo.code",
    "repo.issues",
    "repo.ext_issues",
    "repo.wiki",
    "repo.pulls",
    "repo.releases",
    "repo.projects",
    "repo.ext_wiki"
  ]
  ```
  
  Items:
    Type: string

- `units_map` (optional)
  Type: object
  
  Example:
  
  ```json
  {
    "repo.code": "read",
    "repo.ext_issues": "none",
    "repo.ext_wiki": "none",
    "repo.issues": "write",
    "repo.projects": "none",
    "repo.pulls": "owner",
    "repo.releases": "none",
    "repo.wiki": "admin"
  }
  ```
  
  Additional properties: 
    Type: string

- `visibility` (optional)
  Type: TeamVisibility
  
  Team visibility within the organization. When omitted, visibility is
  left unchanged.
  
  allOf:
    Reference: [TeamVisibility](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/teamvisibility.md); Type: TeamVisibility
    
    enum: ["public","limited","private"]