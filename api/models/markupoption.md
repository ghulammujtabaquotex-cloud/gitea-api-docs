# MarkupOption

Type: MarkupOption

MarkupOption markup options

Schema: [MarkupOption](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/markupoption.md)

- `Context` (optional)
  Type: string
  
  URL path for rendering issue, media and file links
  Expected format: /subpath/{user}/{repo}/src/{branch, commit, tag}/{identifier/path}/{file/dir}

- `FilePath` (optional)
  Type: string
  
  File path for detecting extension in file mode

- `Mode` (optional)
  Type: string
  
  Mode to render (markdown, comment, wiki, file)

- `Text` (optional)
  Type: string
  
  Text markup to render

- `Wiki` (optional)
  Type: boolean
  
  Is it a wiki page? (use mode=wiki instead)