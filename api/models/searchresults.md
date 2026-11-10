# SearchResults

Type: SearchResults

SearchResults results of a successful search

Schema: [SearchResults](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/searchresults.md)

- `data` (optional)
  Type: Array<Repository>
  
  Data contains the repository search results
  
  Items:
    Reference: [Repository](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/repository.md); Type: Repository
    
    Repository represents a repository

- `ok` (optional)
  Type: boolean
  
  OK indicates if the search was successful