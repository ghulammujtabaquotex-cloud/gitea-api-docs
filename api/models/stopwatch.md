# StopWatch

Type: StopWatch

StopWatch represent a running stopwatch

Schema: [StopWatch](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/stopwatch.md)

- `created` (optional)
  Type: string, date-time
  
  Created is the time when the stopwatch was started

- `duration` (optional)
  Type: string
  
  Duration is a human-readable duration string

- `issue_index` (optional)
  Type: integer, int64
  
  IssueIndex is the index number of the associated issue

- `issue_title` (optional)
  Type: string
  
  IssueTitle is the title of the associated issue

- `repo_name` (optional)
  Type: string
  
  RepoName is the name of the repository

- `repo_owner_name` (optional)
  Type: string
  
  RepoOwnerName is the name of the repository owner

- `seconds` (optional)
  Type: integer, int64
  
  Seconds is the total elapsed time in seconds