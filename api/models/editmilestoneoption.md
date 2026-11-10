# EditMilestoneOption

Type: EditMilestoneOption

EditMilestoneOption options for editing a milestone

Schema: [EditMilestoneOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editmilestoneoption.md)

- `description` (optional)
  Type: string
  
  Description provides updated details about the milestone

- `due_on` (optional)
  Type: string, date-time
  
  Deadline is the due date for the milestone, use null or empty string to remove the deadline

- `state` (optional)
  Type: StateType
  
  State indicates the updated state of the milestone
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  Title is the updated title of the milestone