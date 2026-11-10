# ActionTaskResponse

Type: ActionTaskResponse

ActionTaskResponse returns a ActionTask

Schema: [ActionTaskResponse](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actiontaskresponse.md)

- `total_count` (optional)
  Type: integer, int64
  
  TotalCount is the total number of workflow runs

- `workflow_runs` (optional)
  Type: Array<ActionTask>
  
  Entries contains the list of workflow runs
  
  Items:
    Reference: [ActionTask](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actiontask.md); Type: ActionTask
    
    ActionTask represents a ActionTask