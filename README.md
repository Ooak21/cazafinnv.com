# cazafinnv.com

CAZA FINNANCIAL, family tax firm in Las Vegas. Ismael Cazares.

Static site served by GitHub Pages on the apex domain `cazafinnv.com`.
No build step. Edit, commit, push.

- Public page: `index.html` + `js/app.js` + `js/chat.js`
- Staff desk: `crm/login.html` + `crm/index.html` (noindex)
- Backend: Supabase project `jtifhcvbgxqwlywugvjv`, tables `caza_*`,
  edge functions `caza-intake`, `caza-chat`, `caza-mailer`, `caza-crm-data`
  (deployed from the `ibs-crm` repo)
- Hero video, poster and OG image are served from Supabase Storage
  `site-media/caza/`. Do not put large mp4s back into this tree.

Spell it CAZA FINNANCIAL. The double N is the brand.
