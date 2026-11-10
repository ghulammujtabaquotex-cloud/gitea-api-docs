# UpdateFileOptions

Type: UpdateFileOptions

UpdateFileOptions options for updating or creating a file
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

Schema: [UpdateFileOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/updatefileoptions.md)

- `author` (optional)
  Reference: [Identity](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/identity.md); Type: Identity
  
  Identity for a person's identity like an author or committer

- `branch` (optional)
  Type: string
  
  branch (optional) is the base branch for the changes. If not supplied, the default branch is used

- `committer` (optional)
  Reference: [Identity](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/identity.md); Type: Identity
  
  Identity for a person's identity like an author or committer

- `content` (required)
  Type: string
  
  content must be base64 encoded

- `dates` (optional)
  Reference: [CommitDateOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commitdateoptions.md); Type: CommitDateOptions
  
  CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE

- `force_push` (optional)
  Type: boolean
  
  force_push (optional) will do a force-push if the new branch already exists

- `from_path` (optional)
  Type: string
  
  from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL

- `message` (optional)
  Type: string
  
  message (optional) is the commit message of the changes. If not supplied, a default message will be used

- `new_branch` (optional)
  Type: string
  
  new_branch (optional) will make a new branch from base branch for the changes. If not supplied, the changes will be committed to the base branch

- `sha` (optional)
  Type: string
  
  the blob ID (SHA) for the file that already exists to update, or leave it empty to create a new file

- `signoff` (optional)
  Type: boolean
  
  Add a Signed-off-by trailer by the committer at the end of the commit log message.