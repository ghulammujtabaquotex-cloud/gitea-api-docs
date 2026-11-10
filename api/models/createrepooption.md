# CreateRepoOption

Type: CreateRepoOption

CreateRepoOption options when creating repository

Schema: [CreateRepoOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createrepooption.md)

- `auto_init` (optional)
  Type: boolean
  
  Whether the repository should be auto-initialized?

- `default_branch` (optional)
  Type: string
  
  DefaultBranch of the repository (used when initializes and in template)

- `description` (optional)
  Type: string
  
  Description of the repository to create

- `gitignores` (optional)
  Type: string
  
  Gitignores to use

- `issue_labels` (optional)
  Type: string
  
  Label-Set to use

- `license` (optional)
  Type: string
  
  License to use

- `name` (required)
  Type: string
  
  Name of the repository to create
  
  uniqueItems: true

- `object_format_name` (optional)
  Type: ObjectFormatName
  
  ObjectFormatName of the underlying git repository, empty string for default (sha1)
  
  allOf:
    Reference: [ObjectFormatName](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/objectformatname.md); Type: ObjectFormatName
    
    enum: ["sha1","sha256"]

- `private` (optional)
  Type: boolean
  
  Whether the repository is private

- `readme` (optional)
  Type: string
  
  Readme of the repository to create

- `template` (optional)
  Type: boolean
  
  Whether the repository is template

- `trust_model` (optional)
  Type: string
  
  TrustModel of the repository
  
  enum: ["default","collaborator","committer","collaboratorcommitter"]