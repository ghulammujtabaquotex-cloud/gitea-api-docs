# RepoCollaboratorPermission

Type: RepoCollaboratorPermission

RepoCollaboratorPermission to get repository permission for a collaborator

Schema: [RepoCollaboratorPermission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repocollaboratorpermission.md)

- `permission` (optional)
  Type: AccessLevelName
  
  Permission level of the collaborator
  
  allOf:
    Reference: [AccessLevelName](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/accesslevelname.md); Type: AccessLevelName
    
    enum: ["none","read","write","admin","owner"]

- `role_name` (optional)
  Type: string
  
  RoleName is the name of the permission role

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user