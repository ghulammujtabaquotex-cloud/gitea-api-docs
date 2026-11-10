# NotificationThread

Type: NotificationThread

NotificationThread expose Notification on API

Schema: [NotificationThread](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/notificationthread.md)

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the notification thread

- `pinned` (optional)
  Type: boolean
  
  Pinned indicates if the notification is pinned

- `repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `subject` (optional)
  Reference: [NotificationSubject](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/notificationsubject.md); Type: NotificationSubject
  
  NotificationSubject contains the notification subject (Issue/Pull/Commit)

- `unread` (optional)
  Type: boolean
  
  Unread indicates if the notification has been read

- `updated_at` (optional)
  Type: string, date-time
  
  UpdatedAt is the time when the notification was last updated

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this notification thread