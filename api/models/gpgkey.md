# GPGKey

Type: GPGKey

GPGKey a user GPG key to sign commit and tag in repository

Schema: [GPGKey](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gpgkey.md)

- `can_certify` (optional)
  Type: boolean
  
  Whether the key can be used for certification

- `can_encrypt_comms` (optional)
  Type: boolean
  
  Whether the key can be used for encrypting communications

- `can_encrypt_storage` (optional)
  Type: boolean
  
  Whether the key can be used for encrypting storage

- `can_sign` (optional)
  Type: boolean
  
  Whether the key can be used for signing

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the GPG key was created

- `emails` (optional)
  Type: Array<GPGKeyEmail>
  
  List of email addresses associated with this GPG key
  
  Items:
    Reference: [GPGKeyEmail](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gpgkeyemail.md); Type: GPGKeyEmail
    
    GPGKeyEmail an email attached to a GPGKey

- `expires_at` (optional)
  Type: string, date-time
  
  The date and time when the GPG key expires

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the GPG key

- `key_id` (optional)
  Type: string
  
  The key ID of the GPG key

- `primary_key_id` (optional)
  Type: string
  
  The primary key ID of the GPG key

- `public_key` (optional)
  Type: string
  
  The public key content in armored format

- `subkeys` (optional)
  Type: Array<GPGKey>
  
  List of subkeys of this GPG key
  
  Items:
    Reference: [GPGKey](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/gpgkey.md); Type: GPGKey

- `verified` (optional)
  Type: boolean
  
  Whether the GPG key has been verified