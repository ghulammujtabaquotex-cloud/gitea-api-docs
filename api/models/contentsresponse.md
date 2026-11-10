# ContentsResponse

Type: ContentsResponse

ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

Schema: [ContentsResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/contentsresponse.md)

- `_links` (optional)
  Reference: [FileLinksResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/filelinksresponse.md); Type: FileLinksResponse
  
  FileLinksResponse contains the links for a repo's file

- `content` (optional)
  Type: string
  
  `content` is populated when `type` is `file`, otherwise null

- `download_url` (optional)
  Type: string, uri
  
  DownloadURL is the direct download URL for this file

- `encoding` (optional)
  Type: string
  
  `encoding` is populated when `type` is `file`, otherwise null

- `git_url` (optional)
  Type: string, uri
  
  GitURL is the Git API URL for this blob or tree

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for this file or directory

- `last_author_date` (optional)
  Type: string, date-time

- `last_commit_message` (optional)
  Type: string
  
  LastCommitMessage is the message of the last commit that affected this file

- `last_commit_sha` (optional)
  Type: string
  
  LastCommitSHA is the SHA of the last commit that affected this file

- `last_committer_date` (optional)
  Type: string, date-time

- `lfs_oid` (optional)
  Type: string
  
  LfsOid is the Git LFS object ID if this file is stored in LFS

- `lfs_size` (optional)
  Type: integer, int64
  
  LfsSize is the file size if this file is stored in LFS

- `mode` (optional)
  Type: string
  
  `mode` is the Git file mode as an octal string, e.g. `100644` (regular), `100755` (executable), `120000` (symlink), `160000` (submodule)

- `name` (optional)
  Type: string
  
  Name is the file or directory name

- `path` (optional)
  Type: string
  
  Path is the full path to the file or directory

- `sha` (optional)
  Type: string
  
  SHA is the Git blob or tree SHA

- `size` (optional)
  Type: integer, int64
  
  Size is the file size in bytes

- `submodule_git_url` (optional)
  Type: string, uri
  
  `submodule_git_url` is populated when `type` is `submodule`, otherwise null

- `target` (optional)
  Type: string
  
  `target` is populated when `type` is `symlink`, otherwise null

- `type` (optional)
  Type: string
  
  `type` will be `file`, `dir`, `symlink`, or `submodule`

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this file or directory