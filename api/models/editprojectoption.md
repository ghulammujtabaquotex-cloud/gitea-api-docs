# EditProjectOption

Type: EditProjectOption

EditProjectOption represents options for editing a project

Schema: [EditProjectOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/editprojectoption.md)

- `card_type` (optional)
  Type: string
  
  Card type: "text_only" or "images_and_text"

- `description` (optional)
  Type: string

- `state` (optional)
  Reference: [StateType](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/statetype.md); Type: StateType
  
  enum: ["open","closed"]

- `title` (optional)
  Type: string