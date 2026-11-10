# MergePullRequestOption

Type: MergePullRequestOption

MergePullRequestForm form for merging Pull Request

Schema: [MergePullRequestOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/mergepullrequestoption.md)

- `delete_branch_after_merge` (optional)
  Type: boolean

- `do` (required)
  Type: string
  
  enum: ["merge","rebase","rebase-merge","squash","fast-forward-only","manually-merged"]

- `force_merge` (optional)
  Type: boolean

- `head_commit_id` (optional)
  Type: string

- `merge_commit_id` (optional)
  Type: string

- `merge_message_field` (optional)
  Type: string

- `merge_title_field` (optional)
  Type: string

- `merge_when_checks_succeed` (optional)
  Type: boolean