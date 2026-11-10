# WatchInfo

Type: WatchInfo

WatchInfo represents an API watch status of one repository

Schema: [WatchInfo](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/watchinfo.md)

- `created_at` (optional)
  Type: string, date-time
  
  The timestamp when the watch status was created

- `ignored` (optional)
  Type: boolean
  
  Whether notifications for the repository are ignored

- `reason` (optional)
  Type: any
  
  The reason for the current watch status

- `repository_url` (optional)
  Type: string, uri
  
  The URL of the repository being watched

- `subscribed` (optional)
  Type: boolean
  
  Whether the repository is being watched for notifications

- `url` (optional)
  Type: string, uri
  
  The URL for managing the watch status