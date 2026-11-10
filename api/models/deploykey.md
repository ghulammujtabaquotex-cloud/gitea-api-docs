# DeployKey

Type: DeployKey

Schema: [DeployKey](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/deploykey.md)

- `created_at` (optional)
  Type: string, date-time
  
  Created is the time when the deploy-key was added

- `fingerprint` (optional)
  Type: string
  
  Fingerprint is the key's fingerprint

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the deploy-key

- `key` (optional)
  Type: string
  
  Key contains the actual SSH key content

- `key_id` (optional)
  Type: integer, int64
  
  KeyID is the associated public key ID

- `key_type` (optional)
  Type: string
  
  Type tells whether the key authenticates over SSH or with a token over HTTPS
  
  enum: ["ssh","token"]

- `read_only` (optional)
  Type: boolean
  
  ReadOnly indicates if the key has read-only access

- `repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `title` (optional)
  Type: string
  
  Title is the human-readable name for the key

- `token` (optional)
  Type: string
  
  Token is the plaintext token of an HTTPS key, only returned when it is created

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this deploy-key