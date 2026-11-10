# GenerateRepoOption

Type: GenerateRepoOption

GenerateRepoOption options when creating a repository using a template

Schema: [GenerateRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/generaterepooption.md)

- `avatar` (optional)
  Type: boolean
  
  include avatar of the template repo

- `default_branch` (optional)
  Type: string
  
  Default branch of the new repository

- `description` (optional)
  Type: string
  
  Description of the repository to create

- `git_content` (optional)
  Type: boolean
  
  include git content of default branch in template repo

- `git_hooks` (optional)
  Type: boolean
  
  include git hooks in template repo

- `labels` (optional)
  Type: boolean
  
  include labels in template repo

- `name` (required)
  Type: string
  
  uniqueItems: true

- `owner` (required)
  Type: string
  
  the organization's name or individual user's name who will own the new repository

- `private` (optional)
  Type: boolean
  
  Whether the repository is private

- `protected_branch` (optional)
  Type: boolean
  
  include protected branches in template repo

- `topics` (optional)
  Type: boolean
  
  include topics in template repo

- `webhooks` (optional)
  Type: boolean
  
  include webhooks in template repo