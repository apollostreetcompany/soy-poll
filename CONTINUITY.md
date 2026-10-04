# SoyPoll continuity

## Goal
Improve discovery and visible privacy/contact for the existing survey, without
changing its questions, responses, hosting target or Typeform configuration.
Acceptance and live status belong to canonical `ops-gad.26` in Ops Metrics.

## Established baseline — October4,2026
Public `apollostreetcompany/soy-poll`, `main`/root legacy GitHub Pages, binds
`soypoll.com`; original source revision `32aa72daafa1fb683d83a2717138434c094f07f9`.
The original111-byte live HTML matched the pinned embed source exactly. Native
HTTPS showed Soy Sauce Survey, question1of20 about the last soy-sauce purchase,
with no answer entered or navigation/submission action. The initial white page
was an intermediate embed load, not a broken-survey diagnosis.

## Decisions
- Keep the original live embed identifier and script; no Typeform edits or tests
  that submit answers. Page copy describes only the observed survey and providers.
- Retain the existing public repository, apex CNAME, Pages source and DNS/mail.
- Add an ordinary HTML document and one canonical sitemap URL. Disallow the
  original nineteen named non-search agents in robots only; this does not add
  request-time protection or guarantee indexing/prevention of copying.
- Direct contact uses the established company Gmail and opens the email app;
  do not invent a working support@ alias or claim forwarded arrival.
- There is no existing first-party PostHog/Datafast code or property binding.
  Preserve that gap explicitly; the Typeform service has separate data handling.
- The existing approved certificate permits strengthening Pages HTTPS
  enforcement. Preserve every other site setting and verify actual redirection.
- No autoreview/replacement review, dependency installation or new test framework.

## Current boundary
Exact original embed div/script attributes and CNAME bytes, HTML structure,
one-URL sitemap and nineteen named robots directives pass focused checks.
Local preview using installed Python3.13/native Chrome loads the unchanged
unanswered initial question. A real post-hydration overlay defect hid the new
header/footer despite their accessible text; relative layout containment fixed
it. Actual privacy-link click reaches the visible full notice/contact and
`#privacy-terms`, without advancing the survey or sending an email. Original
third-party-cookie/privacy settings remained unchanged. Official provider
privacy/service-terms destinations were located before publication.

Source is not yet accepted on main/Pages. Next: normal source PR/Pages
publication, exact actual public responses and unchanged initial survey, then
the existing HTTPS-only setting and real redirect. Full analytics, mail
forwarding and server-side
crawler controls remain portfolio gaps; this source milestone does not close
the original all-domain goal.
