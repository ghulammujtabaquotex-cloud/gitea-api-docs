# AnnotatedTag

Type: AnnotatedTag

AnnotatedTag represents an annotated tag

Schema: [AnnotatedTag](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/annotatedtag.md)

- `message` (optional)
  Type: string
  
  The message associated with the annotated tag

- `object` (optional)
  Reference: [AnnotatedTagObject](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/annotatedtagobject.md); Type: AnnotatedTagObject
  
  AnnotatedTagObject contains meta information of the tag object

- `sha` (optional)
  Type: string
  
  The SHA hash of the annotated tag

- `tag` (optional)
  Type: string
  
  The name of the annotated tag

- `tagger` (optional)
  Reference: [CommitUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/commituser.md); Type: CommitUser

- `url` (optional)
  Type: string, uri
  
  The URL to access the annotated tag

- `verification` (optional)
  Reference: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md); Type: PayloadCommitVerification
  
  PayloadCommitVerification represents the GPG verification of a commit