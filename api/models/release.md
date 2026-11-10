# Release

Type: Release

Release represents a repository release

Schema: [Release](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/release.md)

- `assets` (optional)
  Type: Array<Attachment>
  
  The files attached to the release
  
  Items:
    Reference: [Attachment](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/attachment.md); Type: Attachment
    
    Attachment a generic attachment

- `author` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `body` (optional)
  Type: string
  
  The release notes or description

- `created_at` (optional)
  Type: string, date-time

- `draft` (optional)
  Type: boolean
  
  Whether the release is a draft

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the release

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the release

- `name` (optional)
  Type: string
  
  The display title of the release

- `prerelease` (optional)
  Type: boolean
  
  Whether the release is a prerelease

- `published_at` (optional)
  Type: string, date-time

- `tag_name` (optional)
  Type: string
  
  The name of the git tag associated with the release

- `tarball_url` (optional)
  Type: string, uri
  
  The URL to download the tarball archive

- `target_commitish` (optional)
  Type: string
  
  The target commitish for the release

- `upload_url` (optional)
  Type: string, uri
  
  The URL template for uploading release assets

- `url` (optional)
  Type: string, uri
  
  The API URL of the release

- `zipball_url` (optional)
  Type: string, uri
  
  The URL to download the zip archive