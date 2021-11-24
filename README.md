## Getting Started

Tech Stack: nextjs/ts
CSS Library: react/semantic-ui.
Package Manager: yarn

Clone the repo

Install dependencies

```bash
   yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### More

Inside the Componets folder is HeadComponent and HomePageLayout

## WebSite is Hosted on Vercel

Everytime you update the `main` branch it will trigger deployment on Vercel

[Demo Landing Page](https://nextjs-landingpage-wheat.vercel.app/)

WebSite Folder Structure:

components

- BodySegment
  - AboutSegment
  - InfoSegment
  - StudiesSegment
- Footer
- HeadComponent
- HomePageComponent
- Layout
  - DesktopContainer
  - MobileContainer
  - MenuItems
  - ResponsiveContainter
lib
pages
- api
- index.tsx [HomePage]
public
- images
styles


tech stack: NextJS, SemanticUI
