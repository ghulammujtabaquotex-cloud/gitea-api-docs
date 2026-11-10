# Package

Type: Package

Package represents a package

Schema: [Package](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/package.md)

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the package was created

- `creator` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the package

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the package

- `name` (optional)
  Type: string
  
  The name of the package

- `owner` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `type` (optional)
  Type: string
  
  The type of the package (e.g., npm, maven, docker)

- `version` (optional)
  Type: string
  
  The version of the package