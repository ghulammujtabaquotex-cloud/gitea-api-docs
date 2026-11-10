# EditHookOption

Type: EditHookOption

EditHookOption options when modify one hook

Schema: [EditHookOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/edithookoption.md)

- `active` (optional)
  Type: boolean
  
  Whether the webhook is active and will be triggered

- `authorization_header` (optional)
  Type: string
  
  Authorization header to include in webhook requests

- `branch_filter` (optional)
  Type: string
  
  Branch filter pattern to determine which branches trigger the webhook

- `config` (optional)
  Type: object
  
  Configuration settings for the webhook
  
  Additional properties: 
    Type: string

- `events` (optional)
  Type: Array<string>
  
  List of events that trigger this webhook
  
  Items:
    Type: string

- `name` (optional)
  Type: string
  
  Optional human-readable name