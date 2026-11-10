# MoveProjectIssueOption

Type: MoveProjectIssueOption

MoveProjectIssueOption represents options for moving an issue between columns

Schema: [MoveProjectIssueOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/moveprojectissueoption.md)

- `column_id` (required)
  Type: integer, int64
  
  Target column to move the issue into

- `sorting` (optional)
  Type: integer, int64
  
  Position within the column, ascending. Omit to append. Negative values sort above
  the rest, equal values are ordered newest first.