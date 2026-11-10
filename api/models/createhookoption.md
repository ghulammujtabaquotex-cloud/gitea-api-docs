# CreateHookOption

Type: CreateHookOption

CreateHookOption options when create a hook

Schema: [CreateHookOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createhookoption.md)

- `active` (optional)
  Type: boolean
  
  Whether the webhook should be active upon creation
  
  default: false

- `authorization_header` (optional)
  Type: string
  
  Authorization header to include in webhook requests

- `branch_filter` (optional)
  Type: string
  
  Branch filter pattern to determine which branches trigger the webhook

- `config` (required)
  Reference: [CreateHookOptionConfig](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createhookoptionconfig.md); Type: CreateHookOptionConfig
  
  CreateHookOptionConfig has all config options in it
  required are "content_type" and "url" Required

- `events` (optional)
  Type: Array<string>
  
  List of events that will trigger this webhook
  
  Items:
    Type: string

- `name` (optional)
  Type: string
  
  Optional human-readable name for the webhook

- `type` (required)
  Type: string
  
  The type of the webhook to create
  
  enum: ["dingtalk","discord","gitea","gogs","msteams","slack","telegram","feishu","wechatwork","packagist"]