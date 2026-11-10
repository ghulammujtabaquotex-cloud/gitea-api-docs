# BranchProtection

Type: BranchProtection

BranchProtection represents a branch protection for a repository

Schema: [BranchProtection](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/branchprotection.md)

- `approvals_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `approvals_whitelist_username` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `block_admin_merge_override` (optional)
  Type: boolean

- `block_on_codeowner_reviews` (optional)
  Type: boolean

- `block_on_official_review_requests` (optional)
  Type: boolean

- `block_on_outdated_branch` (optional)
  Type: boolean

- `block_on_rejected_reviews` (optional)
  Type: boolean

- `branch_name` (optional)
  Type: string

- `bypass_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `bypass_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `created_at` (optional)
  Type: string, date-time

- `dismiss_stale_approvals` (optional)
  Type: boolean

- `enable_approvals_whitelist` (optional)
  Type: boolean

- `enable_bypass_allowlist` (optional)
  Type: boolean

- `enable_force_push` (optional)
  Type: boolean

- `enable_force_push_allowlist` (optional)
  Type: boolean

- `enable_merge_whitelist` (optional)
  Type: boolean

- `enable_push` (optional)
  Type: boolean

- `enable_push_whitelist` (optional)
  Type: boolean

- `enable_status_check` (optional)
  Type: boolean

- `force_push_allowlist_deploy_keys` (optional)
  Type: boolean

- `force_push_allowlist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `force_push_allowlist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `ignore_stale_approvals` (optional)
  Type: boolean

- `merge_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `merge_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `priority` (optional)
  Type: integer, int64
  
  Priority is the priority of this branch protection rule

- `protected_file_patterns` (optional)
  Type: string

- `push_whitelist_deploy_keys` (optional)
  Type: boolean

- `push_whitelist_teams` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `push_whitelist_usernames` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `require_signed_commits` (optional)
  Type: boolean

- `required_approvals` (optional)
  Type: integer, int64

- `rule_name` (optional)
  Type: string
  
  RuleName is the name of the branch protection rule

- `status_check_contexts` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `unprotected_file_patterns` (optional)
  Type: string

- `updated_at` (optional)
  Type: string, date-time