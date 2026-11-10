# IssueFormField

Type: IssueFormField

IssueFormField represents a form field

Schema: [IssueFormField](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/issueformfield.md)

- `attributes` (optional)
  Type: object
  
  Additional properties: 
    Type: any

- `id` (optional)
  Type: string

- `type` (optional)
  Type: string
  
  enum: ["markdown","textarea","input","dropdown","checkboxes"]

- `validations` (optional)
  Type: object
  
  Additional properties: 
    Type: any

- `visible` (optional)
  Type: Array<string>
  
  Items:
    Type: string
    
    enum: ["form","content"]