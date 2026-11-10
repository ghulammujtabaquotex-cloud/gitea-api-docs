# TransferRepoOption

Type: TransferRepoOption

TransferRepoOption options when transfer a repository's ownership

Schema: [TransferRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/transferrepooption.md)

- `new_owner` (required)
  Type: string

- `team_ids` (optional)
  Type: Array<integer>
  
  ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
  
  Items:
    Type: integer, int64