# CreateReleaseOption

Type: CreateReleaseOption

CreateReleaseOption options when creating a release

Schema: [CreateReleaseOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createreleaseoption.md)

- `body` (optional)
  Type: string
  
  The release notes or description

- `draft` (optional)
  Type: boolean
  
  Whether to create the release as a draft

- `name` (optional)
  Type: string
  
  The display title of the release

- `prerelease` (optional)
  Type: boolean
  
  Whether to mark the release as a prerelease

- `tag_message` (optional)
  Type: string
  
  The message for the git tag

- `tag_name` (required)
  Type: string

- `target_commitish` (optional)
  Type: string
  
  The target commitish for the release