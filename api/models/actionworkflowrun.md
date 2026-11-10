# ActionWorkflowRun

Type: ActionWorkflowRun

ActionWorkflowRun represents a WorkflowRun

Schema: [ActionWorkflowRun](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionworkflowrun.md)

- `actor` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `artifacts_url` (optional)
  Type: string, uri

- `cancel_url` (optional)
  Type: string, uri

- `completed_at` (optional)
  Type: string, date-time

- `conclusion` (optional)
  Type: string

- `created_at` (optional)
  Type: string, date-time

- `display_title` (optional)
  Type: string

- `event` (optional)
  Type: string

- `head_branch` (optional)
  Type: string

- `head_repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `head_sha` (optional)
  Type: string

- `html_url` (optional)
  Type: string, uri

- `id` (optional)
  Type: integer, int64

- `jobs_url` (optional)
  Type: string, uri

- `logs_url` (optional)
  Type: string, uri

- `path` (optional)
  Type: string

- `previous_attempt_url` (optional)
  Type: string, uri
  
  PreviousAttemptURL is the API URL of the previous attempt of this run, e.g. ".../actions/runs/{run_id}/attempts/{attempt-1}".
  It is set only when the current attempt is > 1 (i.e. a rerun). For the first attempt, or for legacy runs that pre-date ActionRunAttempt, it is null.

- `pull_requests` (optional)
  Type: Array<PullRequestMinimal>
  
  Items:
    Reference: [PullRequestMinimal](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/pullrequestminimal.md); Type: PullRequestMinimal
    
    PullRequestMinimal is the minimal information about a pull request, as
    returned in the `pull_requests` field of a workflow run.

- `repository` (optional)
  Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
  
  Repository represents a repository

- `repository_id` (optional)
  Type: integer, int64

- `rerun_url` (optional)
  Type: string, uri

- `run_attempt` (optional)
  Type: integer, int64
  
  RunAttempt is 1-based for runs created after ActionRunAttempt was introduced.
  A value of 0 is a legacy-only sentinel for runs created before attempts existed
  and indicates no corresponding /attempts/{n} resource is available.

- `run_number` (optional)
  Type: integer, int64

- `started_at` (optional)
  Type: string, date-time

- `status` (optional)
  Type: string

- `trigger_actor` (optional)
  Reference: [User](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/user.md); Type: User
  
  User represents a user

- `updated_at` (optional)
  Type: string, date-time

- `url` (optional)
  Type: string, uri