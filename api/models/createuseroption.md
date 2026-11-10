# CreateUserOption

Type: CreateUserOption

CreateUserOption create user options

Schema: [CreateUserOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createuseroption.md)

- `created_at` (optional)
  Type: string, date-time
  
  For explicitly setting the user creation timestamp. Useful when users are
  migrated from other systems. When omitted, the user's creation timestamp
  will be set to "now".

- `email` (required)
  Type: string

- `full_name` (optional)
  Type: string
  
  The full display name of the user

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `must_change_password` (optional)
  Type: boolean
  
  Whether the user must change password on first login

- `password` (optional)
  Type: string
  
  The plain text password for the user

- `restricted` (optional)
  Type: boolean
  
  Whether the user has restricted access privileges

- `send_notify` (optional)
  Type: boolean
  
  Whether to send welcome notification email to the user

- `source_id` (optional)
  Type: integer, int64
  
  The authentication source ID to associate with the user

- `username` (required)
  Type: string
  
  username of the user

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level: public, limited, or private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]