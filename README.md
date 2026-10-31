# Dark academic portfolio template

This version follows the two-column, dark, monospace design in your reference screenshot.

## Edit the site

- `index.html`: your name, role, affiliations, profile image path, navigation and contact/social links
- `content/about.html`: biography
- `content/research.html`: research description
- `content/publications.html`: publication list
- `style.css`: colors, typography, spacing, layout and responsive behavior
- `images/profile.jpg`: replace with your own photo

## Build the site

Requires Python 3.8 or newer. From this folder run:

```bash
python build.py
```

The final, JavaScript-free site is generated in `site/`. Upload the contents of that folder to GitHub Pages, Netlify, or another static host.

The website itself does not use JavaScript. Python is only used locally to combine the separate editable content files into one static HTML page.
