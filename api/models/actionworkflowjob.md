# ActionWorkflowJob

Type: ActionWorkflowJob

ActionWorkflowJob represents a WorkflowJob

Schema: [ActionWorkflowJob](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowjob.md)

- `completed_at` (optional)
  Type: string, date-time

- `conclusion` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `head_branch` (optional)
  Type: string

- `head_sha` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `labels` (optional)
  Type: Array<string>
  
  Items:
    Type: string

- `name` (optional)
  Type: string

- `run_attempt` (optional)
  Type: integer, int64

- `run_id` (optional)
  Type: integer, int64

- `run_url` (optional)
  Type: string, uri

- `runner_id` (optional)
  Type: integer, int64

- `runner_name` (optional)
  Type: string

- `started_at` (optional)
  Type: string, date-time

- `status` (optional)
  Type: string

- `steps` (optional)
  Type: Array<ActionWorkflowStep>
  
  Items:
    Reference: [ActionWorkflowStep](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowstep.md); Type: ActionWorkflowStep
    
    ActionWorkflowStep represents a step of a WorkflowJob

- `url` (optional)
  Type: string, uri