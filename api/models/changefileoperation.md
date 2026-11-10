# ChangeFileOperation

Type: ChangeFileOperation

ChangeFileOperation for creating, updating or deleting a file

Schema: [ChangeFileOperation](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/changefileoperation.md)

- `content` (optional)
  Type: string
  
  new or updated file content, it must be base64 encoded

- `from_path` (optional)
  Type: string
  
  old path of the file to move

- `operation` (required)
  Type: string
  
  indicates what to do with the file: "create" for creating a new file, "update" for updating an existing file,
  "upload" for creating or updating a file, "rename" for renaming a file, and "delete" for deleting an existing file.
  
  enum: ["create","update","upload","rename","delete"]

- `path` (required)
  Type: string
  
  path to the existing or new file

- `sha` (optional)
  Type: string
  
  the blob ID (SHA) for the file that already exists, required for changing existing files