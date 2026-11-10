# MarkdownOption

Type: MarkdownOption

MarkdownOption markdown options

Schema: [MarkdownOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/markdownoption.md)

- `Context` (optional)
  Type: string
  
  URL path for rendering issue, media and file links
  Expected format: /subpath/{user}/{repo}/src/{branch, commit, tag}/{identifier/path}/{file/dir}

- `Mode` (optional)
  Type: string
  
  Mode to render (markdown, comment, wiki, file)

- `Text` (optional)
  Type: string
  
  Text markdown to render

- `Wiki` (optional)
  Type: boolean
  
  Is it a wiki page? (use mode=wiki instead)