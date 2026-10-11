# Palak, maan jao na please 🧸💗

A tiny, cute apology website. Pure HTML + CSS + vanilla JS. No build, no dependencies, free to host.

## Name in the URL
Share `https://<user>.github.io/<repo>/<Name>` — the name fills every spot that used to say Palak (no name = `Palak`).
Works via `404.html` (GitHub Pages serves it for unknown paths, it redirects to `?n=<Name>`).
Locally, open `index.html?n=Riya`. For a user/root site (no repo segment), set `segmentsToKeep = 0` in `404.html`.

## Customise (top of `script.js`)
- `senderName`: your name (leave `''` to stay anonymous)
- `finalMessage`: the Level 60 apology
- `secretMessage`, `softCloseMessage`, `hugMessage`

## Run locally
Open `index.html` in a browser.

## Deploy on GitHub Pages (free)
1. Create a free GitHub repository named `palak-apology`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Save and wait for GitHub Pages to publish the site.
7. Open the published URL and test it on a phone.
