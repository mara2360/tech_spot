# TechSpot

A modern editorial technology publication covering artificial intelligence, cybersecurity, web development, cloud computing, open source, hardware, and the future of work.

## View the website

**[Open the live TechSpot website](https://techspot-modern-journal.md-ramshaw.chatgpt.site)**

The GitHub repository contains the website's source code. GitHub's repository page displays this README rather than running the application itself.

## Features

- Responsive editorial homepage
- Individual article pages
- Story and topic indexes
- Category-filtered article collections
- About page
- Sticky primary and secondary navigation
- Mobile-friendly layouts

## Run locally

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal.

## Production build

```bash
npm run build
npm run start
```

## Project structure

- `app/` — pages, components, article data, and styling
- `public/` — public images and icons
- `.openai/hosting.json` — hosted-site configuration
- `vite.config.ts` — vinext build configuration

## Technology

Built with React, Next.js-compatible routing, TypeScript, Vite, and vinext.
