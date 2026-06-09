# Microbial Genomics & Biodegradation Lab Website

This repository contains the source code for the official website of the Microbial Genomics and Biodegradation (MGB) Lab at the Department of Plant and Environmental Sciences, University of Copenhagen (PLEN • KU). The website serves as a public portal detailing the lab's research on dehalogenase engineering, metagenomic mining, and PFAS biodegradation.

## Scientific and technical foundation

The application is engineered as a high-performance web portal built on a modern frontend stack:
* **Framework:** [Next.js 16](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/next.config.ts) (App Router, Turbopack) and React 19
* **Styling:** TailwindCSS v4 (using CSS variables for dynamic light/dark theme adaptation)
* **Animations:** Framer Motion (providing scroll-driven simulations of the $S_N2$ dehalogenation reaction mechanism, highlighting the nucleophilic attack of Asp10, the coordination cradle of Arg41/Trp179, and the base-catalysed water activation of Asp180)

## Content structure

Content is managed via markdown and typescript files located in the [content/](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/content) directory:
* **Research themes:** Outlined in [content/research/](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/content/research)
* **Team members:** Group profiles and links managed in [content/people/](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/content/people)
* **Publications:** Peer-reviewed outputs catalogued in [content/publications/](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/content/publications)
* **Projects:** Grant information and active collaborations in [content/projects/](file:///mnt/wdpassport/Coding/02_Websites/KU-MGB/content/projects)

## Development workflow

To run the development server locally, install dependencies and start the compiler from the project root:

```bash
npm install
npm run dev
```

Build validation is performed using:

```bash
npm run build
```

## Deployment pipeline

Continuous integration and deployment are handled automatically. Pushing commits to the `main` branch triggers a GitHub Actions workflow that compiles the static assets and deploys the build to GitHub Pages.

---
*Note: This document provides source code documentation and is not displayed on the public website.*
