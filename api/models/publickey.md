# PublicKey

Type: PublicKey

PublicKey publickey is a user key to push code to repository

Schema: [PublicKey](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/publickey.md)

- `created_at` (optional)
  Type: string, date-time
  
  Created is the time when the key was added

- `fingerprint` (optional)
  Type: string
  
  Fingerprint is the key's fingerprint

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the public key

- `key` (optional)
  Type: string
  
  Key contains the actual SSH public key content

- `key_type` (optional)
  Type: string
  
  KeyType indicates the type of the SSH key

- `last_used_at` (optional)
  Type: string, date-time
  
  Updated is the time when the key was last used

- `read_only` (optional)
  Type: boolean
  
  ReadOnly indicates if the key has read-only access

- `title` (optional)
  Type: string
  
  Title is the human-readable name for the key

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this key

- `user` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user