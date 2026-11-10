# CreateGPGKeyOption

Type: CreateGPGKeyOption

CreateGPGKeyOption options create user GPG key

Schema: [CreateGPGKeyOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/creategpgkeyoption.md)

- `armored_public_key` (required)
  Type: string
  
  An armored GPG key to add
  
  uniqueItems: true

- `armored_signature` (optional)
  Type: string
  
  An optional armored signature for the GPG key