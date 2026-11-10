# ActionTask

Type: ActionTask

ActionTask represents a ActionTask

Schema: [ActionTask](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actiontask.md)

- `created_at` (optional)
  Type: string, date-time

- `display_title` (optional)
  Type: string
  
  DisplayTitle is the display title for the workflow run

- `event` (optional)
  Type: string
  
  Event is the type of event that triggered the workflow

- `head_branch` (optional)
  Type: string
  
  HeadBranch is the branch that triggered the workflow

- `head_sha` (optional)
  Type: string
  
  HeadSHA is the commit SHA that triggered the workflow

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the action task

- `name` (optional)
  Type: string
  
  Name is the name of the workflow

- `run_number` (optional)
  Type: integer, int64
  
  RunNumber is the sequential number of the workflow run

- `run_started_at` (optional)
  Type: string, date-time

- `status` (optional)
  Type: string
  
  Status indicates the current status of the workflow run

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri
  
  URL is the API URL for this workflow run

- `workflow_id` (optional)
  Type: string
  
  WorkflowID is the identifier of the workflow