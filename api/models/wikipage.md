# WikiPage

Type: WikiPage

WikiPage a wiki page

Schema: [WikiPage](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikipage.md)

- `commit_count` (optional)
  Type: integer, int64
  
  The number of commits that modified this page

- `content_base64` (optional)
  Type: string
  
  Page content, base64 encoded

- `footer` (optional)
  Type: string
  
  The footer content for the wiki page

- `html_url` (optional)
  Type: string, uri
  
  The HTML URL to view the wiki page

- `last_commit` (optional)
  Reference: [WikiCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikicommit.md); Type: WikiCommit
  
  WikiCommit page commit/revision

- `sidebar` (optional)
  Type: string
  
  The sidebar content for the wiki page

- `sub_url` (optional)
  Type: string, uri
  
  The sub URL path for the wiki page

- `title` (optional)
  Type: string
  
  The title of the wiki page