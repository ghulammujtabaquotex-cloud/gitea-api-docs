# Milestone

Type: Milestone

Milestone milestone is a collection of issues on one repository

Schema: [Milestone](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/milestone.md)

- `closed_at` (optional)
  Type: string, date-time

- `closed_issues` (optional)
  Type: integer, int64
  
  ClosedIssues is the number of closed issues in this milestone

- `created_at` (optional)
  Type: string, date-time

- `description` (optional)
  Type: string
  
  Description provides details about the milestone

- `due_on` (optional)
  Type: string, date-time

- `id` (optional)
  Type: integer, int64
  
  ID is the unique identifier for the milestone

- `open_issues` (optional)
  Type: integer, int64
  
  OpenIssues is the number of open issues in this milestone

- `state` (optional)
  Type: StateType
  
  State indicates if the milestone is open or closed
  
  allOf:
    Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
    
    enum: ["open","closed"]

- `title` (optional)
  Type: string
  
  Title is the title of the milestone

- `updated_at` (optional)
  Type: string, date-time