# WikiCommitList

Type: WikiCommitList

WikiCommitList commit/revision list

Schema: [WikiCommitList](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikicommitlist.md)

- `commits` (optional)
  Type: Array<WikiCommit>
  
  The list of wiki commits
  
  Items:
    Reference: [WikiCommit](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/wikicommit.md); Type: WikiCommit
    
    WikiCommit page commit/revision

- `count` (optional)
  Type: integer, int64
  
  The total count of commits