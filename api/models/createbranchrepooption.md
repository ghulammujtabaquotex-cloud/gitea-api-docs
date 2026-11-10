# CreateBranchRepoOption

Type: CreateBranchRepoOption

CreateBranchRepoOption options when creating a branch in a repository

Schema: [CreateBranchRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createbranchrepooption.md)

- `new_branch_name` (required)
  Type: string
  
  Name of the branch to create
  
  uniqueItems: true

- `old_branch_name` (optional)
  Type: string
  
  Name of the old branch to create from
  
  uniqueItems: true

- `old_ref_name` (optional)
  Type: string
  
  Name of the old branch/tag/commit to create from
  
  uniqueItems: true