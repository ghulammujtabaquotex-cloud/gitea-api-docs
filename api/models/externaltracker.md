# ExternalTracker

Type: ExternalTracker

ExternalTracker represents settings for external tracker

Schema: [ExternalTracker](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/externaltracker.md)

- `external_tracker_format` (optional)
  Type: string
  
  External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.

- `external_tracker_regexp_pattern` (optional)
  Type: string
  
  External Issue Tracker issue regular expression

- `external_tracker_style` (optional)
  Type: string
  
  External Issue Tracker Number Format, either `numeric`, `alphanumeric`, or `regexp`

- `external_tracker_url` (optional)
  Type: string, uri
  
  URL of external issue tracker.