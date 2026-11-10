# RepoTransfer

Type: RepoTransfer

RepoTransfer represents a pending repo transfer

Schema: [RepoTransfer](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repotransfer.md)

- `doer` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `recipient` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `teams` (optional)
  Type: Array<Team>
  
  Items:
    Reference: [Team](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/team.md); Type: Team
    
    Team represents a team in an organization