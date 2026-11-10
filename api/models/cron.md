# Cron

Type: Cron

Cron represents a Cron task

Schema: [Cron](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/cron.md)

- `exec_times` (optional)
  Type: integer, int64
  
  The total number of times this cron task has been executed

- `name` (optional)
  Type: string
  
  The name of the cron task

- `next` (optional)
  Type: string, date-time
  
  The next scheduled execution time

- `prev` (optional)
  Type: string, date-time
  
  The previous execution time

- `schedule` (optional)
  Type: string
  
  The cron schedule expression (e.g., "0 0 * * *")