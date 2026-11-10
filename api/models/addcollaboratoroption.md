# AddCollaboratorOption

Type: AddCollaboratorOption

AddCollaboratorOption options when adding a user as a collaborator of a repository

Schema: [AddCollaboratorOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/addcollaboratoroption.md)

- `permission` (optional)
  Type: RepoWritePermission
  
  Permission level to grant the collaborator
  
  allOf:
    Reference: [RepoWritePermission](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repowritepermission.md); Type: RepoWritePermission
    
    enum: ["read","write","admin"]