# Branch

Type: Branch

Branch represents a repository branch

Schema: [Branch](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/branch.md)

- `commit` (optional)
  Reference: [PayloadCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommit.md); Type: PayloadCommit
  
  PayloadCommit represents a commit

- `effective_branch_protection_name` (optional)
  Type: string
  
  EffectiveBranchProtectionName is the name of the effective branch protection rule

- `enable_status_check` (optional)
  Type: boolean
  
  EnableStatusCheck indicates if status checks are enabled

- `name` (optional)
  Type: string
  
  Name is the branch name

- `protected` (optional)
  Type: boolean
  
  Protected indicates if the branch is protected

- `required_approvals` (optional)
  Type: integer, int64
  
  RequiredApprovals is the number of required approvals for pull requests

- `status_check_contexts` (optional)
  Type: Array<string>
  
  StatusCheckContexts contains the list of required status check contexts
  
  Items:
    Type: string

- `user_can_merge` (optional)
  Type: boolean
  
  UserCanMerge indicates if the current user can merge to this branch

- `user_can_push` (optional)
  Type: boolean
  
  UserCanPush indicates if the current user can push to this branch