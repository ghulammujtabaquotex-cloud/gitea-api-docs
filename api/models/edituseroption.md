# EditUserOption

Type: EditUserOption

EditUserOption edit user options

Schema: [EditUserOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/edituseroption.md)

- `active` (optional)
  Type: boolean
  
  Whether the user account is active

- `admin` (optional)
  Type: boolean
  
  Whether the user has administrator privileges

- `allow_create_organization` (optional)
  Type: boolean
  
  Whether the user can create organizations

- `allow_git_hook` (optional)
  Type: boolean
  
  Whether the user can use Git hooks

- `allow_import_local` (optional)
  Type: boolean
  
  Whether the user can import local repositories

- `description` (optional)
  Type: string
  
  The user's personal description or bio

- `email` (optional)
  Type: string, email
  
  The email address of the user

- `full_name` (optional)
  Type: string
  
  The full display name of the user

- `location` (optional)
  Type: string
  
  The user's location or address

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `max_repo_creation` (optional)
  Type: integer, int64
  
  Maximum number of repositories the user can create

- `must_change_password` (optional)
  Type: boolean
  
  Whether the user must change password on next login

- `password` (optional)
  Type: string
  
  The plain text password for the user

- `prohibit_login` (optional)
  Type: boolean
  
  Whether the user is prohibited from logging in

- `restricted` (optional)
  Type: boolean
  
  Whether the user has restricted access privileges

- `source_id` (required)
  Type: integer, int64
  
  The authentication source ID to associate with the user

- `type` (optional)
  Type: UserTypeString
  
  The user type
  
  allOf:
    Reference: [UserTypeString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usertypestring.md); Type: UserTypeString
    
    enum: ["User","Organization","Bot"]

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level: public, limited, or private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  The user's personal website URL