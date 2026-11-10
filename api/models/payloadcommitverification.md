# PayloadCommitVerification

Type: PayloadCommitVerification

PayloadCommitVerification represents the GPG verification of a commit

Schema: [PayloadCommitVerification](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloadcommitverification.md)

- `payload` (optional)
  Type: string
  
  The signed payload content

- `reason` (optional)
  Type: string
  
  The reason for the verification status

- `signature` (optional)
  Type: string
  
  The GPG signature of the commit

- `signer` (optional)
  Reference: [PayloadUser](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/api/models/payloaduser.md); Type: PayloadUser
  
  PayloadUser represents the author or committer of a commit

- `verified` (optional)
  Type: boolean
  
  Whether the commit signature is verified