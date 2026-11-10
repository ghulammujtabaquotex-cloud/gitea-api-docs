# CreateMilestoneOption

Type: CreateMilestoneOption

CreateMilestoneOption options for creating a milestone

Schema: [CreateMilestoneOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/createmilestoneoption.md)

- `description` (optional)
  Type: string
  
  Description provides details about the milestone

- `due_on` (optional)
  Type: string, date-time
  
  Deadline is the due date for the milestone

- `state` (optional)
  Type: StateType
  
  State indicates the initial state of the milestone
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  Title is the title of the new milestone