# SoyPoll

## Goal and user outcome
Serve the existing Soy Sauce Survey at `https://soypoll.com/`. A visitor should
understand the page, find privacy and contact information, and reach the same
Typeform questions without an account or a new checkout.

## Scope and invariants
Maintain the small static website, search discovery and factual website notices.
Preserve Typeform live ID `01J10JX4GD448EYE3Q8P7R71FS`, its embed script,
questions, responses and configuration. Do not submit survey responses as tests.
Preserve `CNAME`, existing DNS/mail, the public repository and GitHub Pages
`main`/root binding. Do not add analytics credentials, vendors, paid plans or
new business claims by inference. PostHog/Datafast, support forwarding and
request-time crawler blocking are unresolved portfolio work, not proven by
this website change. Robots directives are not enforced request denials.

## Repository map
- `index.html`: public document and existing Typeform embed.
- `robots.txt` and `sitemap.xml`: public search discovery.
- `CNAME`: existing apex custom domain.
- `README.md`: public operating notes.
- `CONTINUITY.md`: source decisions and resume context, not a second live queue.
- `MISTAKES.md`: observed embed and validation lessons.

## Run and verify
There is no package manager, dependency installation, application build or test
framework. The original repository contained only README, CNAME and the embed.
Local preview: `python3.13 -m http.server 33126 --bind 127.0.0.1`, verified
October4 with the already installed interpreter. Check HTML structure, exact
embed preservation, actual discovery responses
and the unanswered native form journey. The existing legacy GitHub Pages build
is the publication boundary; a successful build alone does not prove the form.

## Workflow and authority
Use a topic branch and a squash-merged PR; no implementation commits directly to
`main`. Preserve the existing public repository rather than changing visibility.
The operator's September29 portfolio setup and cross-project Git authorization
cover this work. This file grants no additional authority. The explicit
portfolio instruction forbids autoreview and replacement review; use focused
checks and actual browser observations instead. No source CI or branch
protection requirement is currently established beyond the existing Pages build.

## Durable context and tracker
Canonical tracker: `br 0.6.0` in the operator's existing private Ops Metrics
checkout, bead `ops-gad.26`; root is the sole tracker writer. Do not initialize
another tracker here. Its JSONL is carried with private Ops Metrics source on
`main`; `br sync --flush-only --json` is verified there, not a remote publish.
No cross-machine writer handoff has occurred. Acceptance, screenshots and
provider receipts belong in that project's existing evidence location, outside
this public source repository. Keep all secrets and private transcripts out of
these public documents. The existing private dashboard remains the status
reporter; it is not proof of this website's acceptance.
