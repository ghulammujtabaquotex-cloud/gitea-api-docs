# ActionArtifact

Type: ActionArtifact

ActionArtifact represents a ActionArtifact

Schema: [ActionArtifact](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionartifact.md)

- `archive_download_url` (optional)
  Type: string, uri

- `created_at` (optional)
  Type: string, date-time

- `expired` (optional)
  Type: boolean

- `expires_at` (optional)
  Type: string, date-time

- `id` (optional)
  Type: integer, int64

- `name` (optional)
  Type: string

- `size_in_bytes` (optional)
  Type: integer, int64

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri

- `workflow_run` (optional)
  Reference: [ActionWorkflowRun](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowrun.md); Type: ActionWorkflowRun
  
  ActionWorkflowRun represents a WorkflowRun