# UpdateBranchRepoOption

Type: UpdateBranchRepoOption

UpdateBranchRepoOption options when updating a branch reference in a repository

Schema: [UpdateBranchRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/updatebranchrepooption.md)

- `force` (optional)
  Type: boolean
  
  Force update even if the change is not a fast-forward

- `new_commit_id` (required)
  Type: string
  
  New commit SHA (or any ref) the branch should point to

- `old_commit_id` (optional)
  Type: string
  
  Expected old commit SHA of the branch; if provided it must match the current tip