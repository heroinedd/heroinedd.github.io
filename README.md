# Homepage

This is a static homepage adapted from [Minimal Light](https://github.com/yaoyao-liu/minimal-light), using its plain HTML approach and sidebar layout. Upstream license: `assets/minimal-light-LICENSE.txt`.

## Edit

- `index.html`: homepage content and navigation.
- `assets/css/style.css` and `assets/css/publications.css`: upstream Minimal Light styles.
- `assets/css/custom.css`: typography, circular portrait, and publication resource links.
- `assets/css/themes.css`: color palettes and navigation styling.
- `assets/js/themes.js`: theme selection and saved appearance preferences.
- `assets/img/`: images.
- `assets/files/`: downloadable documents.
- `assets/publications/`: publication materials and a source manifest.

Google Fonts loads Crimson Pro and Ubuntu Mono. Publication links use icons and text without thumbnails.

## Preview

Run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. No packages or build step are needed.

## GitHub Pages

Push the site to a GitHub repository. In Settings → Pages, choose “Deploy from a branch,” select the branch containing these files, and select `/ (root)`. The `.nojekyll` file allows direct static hosting.
