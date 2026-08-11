# D'Marley Grant — Portfolio Site

A single-page, static portfolio built with plain HTML/CSS/JS (no build step, no dependencies).

## Files

```
index.html      Page structure & content
style.css       All styling
script.js       Mobile nav toggle only
assets/
  headshot.png              Your photo
  DMarleyGrant_Resume.pdf   Downloadable resume
```

## Deploy to GitHub Pages (free, public URL)

1. Create a new **public** repository on GitHub — name it whatever you like
   (e.g. `portfolio`), but note: if you name it exactly
   `YOUR-USERNAME.github.io`, it publishes at the root of that URL.
2. Upload these files (drag-and-drop on GitHub's "Add file → Upload files"
   works fine, or use git — see below). Keep the `assets` folder structure
   intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source: Deploy from a branch**,
   branch: `main`, folder: `/ (root)`. Save.
5. GitHub will give you a live URL, usually:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`
   (or `https://YOUR-USERNAME.github.io/` if you used the special repo name
   above). It can take 1–2 minutes to go live.
6. **Before submitting:** open that URL in a normal (not logged-in) browser
   window or incognito tab to confirm it's fully public with no login
   prompt, and open it on your phone to confirm it looks right.

### If you'd rather use git from the command line
```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```
Then follow steps 3–6 above.

## Editing content later

- Text and section content live directly in `index.html` — search for the
  section you want (`id="about"`, `id="projects"`, etc.) and edit the text
  between the tags.
- Colors and fonts are defined once at the top of `style.css` under `:root`
  — change a value there and it updates everywhere.
- To swap the resume, replace `assets/DMarleyGrant_Resume.pdf` with a new
  file of the *same name*, or update the filename in the two places it's
  linked in `index.html`.
