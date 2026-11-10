# NotificationSubject

Type: NotificationSubject

NotificationSubject contains the notification subject (Issue/Pull/Commit)

Schema: [NotificationSubject](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/notificationsubject.md)

- `html_url` (optional)
  Type: string, uri
  
  HTMLURL is the web URL for the notification subject

- `latest_comment_html_url` (optional)
  Type: string, uri
  
  LatestCommentHTMLURL is the web URL for the latest comment

- `latest_comment_url` (optional)
  Type: string, uri
  
  LatestCommentURL is the API URL for the latest comment

- `state` (optional)
  Type: string
  
  State indicates the current state of the notification subject
  
  enum: ["open","closed","merged"]

- `title` (optional)
  Type: string
  
  Title is the title of the notification subject

- `type` (optional)
  Type: string
  
  Type indicates the type of the notification subject
  
  enum: ["Issue","Pull","Commit","Repository"]

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for the notification subject