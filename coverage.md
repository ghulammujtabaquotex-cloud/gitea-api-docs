# Coverage {#coverage}


These numbers are counted directly from
`templates/swagger/v1-openapi3.generated.json` at commit
`4f5a3e13e5f3aca85d830e3a9024c893b0bbf1e1` (tag `v28.3.0`). They describe the
documented surface, not the whole of Gitea.

| Concept | Count |
| --- | --- |
| Paths | 342 |
| Operations (method + path) | 537 |
| Tag groups | 9 |
| Reusable schemas (`components.schemas`) | 234 |
| Security schemes | 7 |
| Deprecated operations | 4 |


## Operations by tag {#operations-by-tag}


Gitea groups its API into nine tags. The counts below are operations per tag,
from the spec:

| Tag | Operations |
| --- | --- |
| repository | 222 |
| user | 93 |
| organization | 83 |
| issue | 72 |
| admin | 33 |
| miscellaneous | 14 |
| package | 9 |
| notification | 7 |
| settings | 4 |


## Security schemes {#security-schemes}


The description declares seven schemes: `AccessToken`, `AuthorizationHeaderToken`,
`BasicAuth`, `SudoHeader`, `SudoParam`, `TOTPHeader` and `Token`. Six are
`apiKey` schemes and one (`BasicAuth`) is HTTP basic auth.


## Servers {#servers}


The spec's `servers` entry is a build placeholder, `/GITEA-API-APP-SUBURL/api/v1`.
A real deployment serves the API under its own instance URL, for example
`https://gitea.example.com/api/v1`. See [Known gaps](https://ghulammujtabaquotex-cloud.github.io/gitea-api-docs/gaps.md) for why this
matters to codegen tools.
