# ActionRunner

Type: ActionRunner

ActionRunner represents a Runner

Schema: [ActionRunner](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionrunner.md)

- `busy` (optional)
  Type: boolean

- `disabled` (optional)
  Type: boolean

- `ephemeral` (optional)
  Type: boolean

- `id` (optional)
  Type: integer, int64

- `labels` (optional)
  Type: Array<ActionRunnerLabel>
  
  Items:
    Reference: [ActionRunnerLabel](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/actionrunnerlabel.md); Type: ActionRunnerLabel
    
    ActionRunnerLabel represents a Runner Label

- `name` (optional)
  Type: string

- `status` (optional)
  Type: string