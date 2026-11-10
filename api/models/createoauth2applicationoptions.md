# CreateOAuth2ApplicationOptions

Type: CreateOAuth2ApplicationOptions

CreateOAuth2ApplicationOptions holds options to create an oauth2 application

Schema: [CreateOAuth2ApplicationOptions](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createoauth2applicationoptions.md)

- `confidential_client` (optional)
  Type: boolean
  
  Whether the client is confidential

- `name` (optional)
  Type: string
  
  The name of the OAuth2 application

- `redirect_uris` (optional)
  Type: Array<string>
  
  The list of allowed redirect URIs
  
  Items:
    Type: string

- `skip_secondary_authorization` (optional)
  Type: boolean
  
  Whether to skip secondary authorization