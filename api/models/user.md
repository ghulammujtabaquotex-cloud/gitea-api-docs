# User

Type: User

User represents a user

Schema: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md)

- `active` (optional)
  Type: boolean
  
  Is user active

- `avatar_url` (optional)
  Type: string, uri
  
  URL to the user's avatar

- `created` (optional)
  Type: string, date-time

- `description` (optional)
  Type: string
  
  the user's description

- `email` (optional)
  Type: string, email

- `followers_count` (optional)
  Type: integer, int64
  
  user counts

- `following_count` (optional)
  Type: integer, int64

- `full_name` (optional)
  Type: string
  
  the user's full name

- `html_url` (optional)
  Type: string, uri
  
  URL to the user's gitea page

- `id` (optional)
  Type: integer, int64
  
  the user's id

- `is_admin` (optional)
  Type: boolean
  
  Is the user an administrator

- `language` (optional)
  Type: string
  
  User locale

- `last_login` (optional)
  Type: string, date-time

- `location` (optional)
  Type: string
  
  the user's location

- `login` (optional)
  Type: string
  
  login of the user, same as `username`

- `login_name` (optional)
  Type: string
  
  identifier of the user, provided by the external authenticator (if configured)

- `prohibit_login` (optional)
  Type: boolean
  
  Is user login prohibited

- `restricted` (optional)
  Type: boolean
  
  Is user restricted

- `source_id` (optional)
  Type: integer, int64
  
  The ID of the user's Authentication Source

- `starred_repos_count` (optional)
  Type: integer, int64

- `type` (optional)
  Type: UserTypeString
  
  the user type
  
  allOf:
    Reference: [UserTypeString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/usertypestring.md); Type: UserTypeString
    
    enum: ["User","Organization","Bot"]

- `visibility` (optional)
  Type: VisibilityString
  
  User visibility level option: public, limited, private
  
  allOf:
    Reference: [VisibilityString](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/visibilitystring.md); Type: VisibilityString
    
    enum: ["public","limited","private"]

- `website` (optional)
  Type: string
  
  the user's website