# Hook

Type: Hook

Hook a hook is a web hook when one repository changed

Schema: [Hook](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/hook.md)

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

- `created_at` (optional)
  Type: string, date-time
  
  The date and time when the webhook was created

- `events` (optional)
  Type: Array<string>
  
  List of events that trigger this webhook
  
  Items:
    Type: string

- `id` (optional)
  Type: integer, int64
  
  The unique identifier of the webhook

- `name` (optional)
  Type: string
  
  Optional human-readable name for the webhook

- `type` (optional)
  Type: string
  
  The type of the webhook (e.g., gitea, slack, discord)

- `updated_at` (optional)
  Type: string, date-time
  
  The date and time when the webhook was last updated