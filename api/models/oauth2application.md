# OAuth2Application

Type: OAuth2Application

Schema: [OAuth2Application](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/oauth2application.md)

- `client_id` (optional)
  Type: string
  
  The client ID of the OAuth2 application

- `client_secret` (optional)
  Type: string
  
  The client secret of the OAuth2 application

- `confidential_client` (optional)
  Type: boolean
  
  Whether the client is confidential

- `created` (optional)
  Type: string, date-time
  
  The timestamp when the application was created

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the OAuth2 application

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