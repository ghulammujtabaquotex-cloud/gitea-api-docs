# CreateKeyOption

Type: CreateKeyOption

Schema: [CreateKeyOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createkeyoption.md)

- `key` (required)
  Type: string
  
  An armored SSH key to add
  
  uniqueItems: true

- `read_only` (optional)
  Type: boolean
  
  Describe if the key has only read access or read/write

- `title` (required)
  Type: string
  
  Title of the key to add
  
  uniqueItems: true