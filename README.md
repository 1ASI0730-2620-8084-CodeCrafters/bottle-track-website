# BottleTrack Landing Page

Static landing page for **BottleTrack**, the bottled beverage transport tracking and IoT monitoring platform built by **CodeCrafters**.

Course: 1ASI0730 Aplicaciones Web · Universidad Peruana de Ciencias Aplicadas.

## Stack

- HTML5, CSS3 and vanilla JavaScript. No build step and no frameworks.
- Design system implemented with CSS custom properties.
- Internationalization for `en-US` and `es-419`, with English as the default language.
- Accessibility following WAI-ARIA practices.

## Structure

```
index.html              home page
terms-of-service.html   terms and conditions, linked from the footer
privacy-policy.html     privacy policy, linked from the footer
style-guide.html        living documentation of the design system
assets/
  styles/
    tokens.css          design tokens: color, typography, spacing, radius, elevation
    base.css            reset, element defaults and layout utilities
    components.css      shared components: button, card, chip, input, skip link
    layout.css          site header, navigation and footer
    landing.css         home page sections
    legal.css           terms of service and privacy policy pages
    style-guide.css     style guide page
  scripts/
    translations.js     English and Spanish dictionaries
    i18n.js             language resolution, switching and persistence
    main.js             responsive navigation
    style-guide.js      copy to clipboard for color tokens
  images/               favicon, product screenshots and team photos
```

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server.

## Version

Current release: `v1.1.0`.

## Deployment

Published on Netlify at https://1asi0730-2620-8084-codecrafters.netlify.app/ from the `main` branch. Netlify publishes a new version after every integration into `main`.

The calls to action of each target segment point to the web application deployed on Vercel at https://frontend-web-aplication.vercel.app: logistics supervisors go to `/monitoring`, corner stores and minimarkets to `/tracking` and distribution managers to `/analytics`.

## Conventions

- **GitFlow**: `main` holds released versions, `develop` integrates work, and every feature lives in its own `feature/<kebab-case-name>` branch.
- **Conventional Commits** for every commit message.
- **Semantic Versioning** for every release, tagged from a `release/<version>` branch.

## Team

CodeCrafters — Universidad Peruana de Ciencias Aplicadas.
