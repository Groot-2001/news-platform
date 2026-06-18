# CDM News Platform

A modern, SEO-optimized news platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Headless WordPress**.

The platform uses WordPress as a content management system (CMS) and Next.js as the frontend application, providing fast page loads, excellent SEO, and a scalable architecture suitable for news and media websites.

---

## Features

### Content Management

* Headless WordPress CMS
* WordPress REST API integration
* Dynamic article pages
* Category pages
* Tag pages
* Author pages
* Search functionality
* Related articles

### SEO

* Dynamic metadata generation
* Canonical URLs
* Open Graph support
* Twitter Cards
* Structured Data (JSON-LD)
* Dynamic sitemap generation
* robots.txt generation

### User Experience

* Responsive design
* Mobile navigation drawer
* Pagination
* Loading states
* Error boundaries
* Custom 404 page

### Performance

* Next.js App Router
* Incremental Static Regeneration (ISR)
* Server Components
* Dynamic image optimization
* Static sitemap generation

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### CMS

* WordPress
* WordPress REST API

### SEO

* Open Graph
* Twitter Cards
* JSON-LD Structured Data
* Sitemap
* Robots.txt

---

## Project Structure

```text
apps/
└── web/
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── features/
    │   └── lib/

packages/
├── api-client/
├── config/
└── types/
```

---

## Architecture

```text
WordPress CMS
      │
      ▼
WordPress REST API
      │
      ▼
wordpress-client.ts
      │
      ▼
WordPress Mappers
      │
      ▼
Articles Service
      │
      ▼
Next.js Pages
      │
      ▼
UI Components
```

---

## Environment Variables

Create a `.env.local` file inside `apps/web`.

```env
WORDPRESS_API_URL=http://cdm-news.local/wp-json/wp/v2

NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEWS_API_PROVIDER=wordpress
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/groot-2001/news-platform.git

cd news-platform
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application:

```text
http://localhost:3000
```

---

## Build

Create a production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

## WordPress Requirements

Required endpoints:

```text
/wp-json/wp/v2/posts?_embed

/wp-json/wp/v2/categories

/wp-json/wp/v2/tags

/wp-json/wp/v2/users
```

---

## SEO Endpoints

Generated automatically:

```text
/robots.txt

/sitemap.xml
```

---

## Pages

### Homepage

```text
/
```

### Article

```text
/articles/[slug]
```

### Category

```text
/categories/[slug]
```

### Tag

```text
/tags/[slug]
```

### Author

```text
/authors/[id]
```

### Search

```text
/search?q=keyword
```

---

## Future Improvements

* Gutenberg block parsing
* Advertisement management
* Newsletter integration
* Analytics dashboard
* User authentication
* Bookmarking system
* Comment system
* AI-powered article recommendations

---

## License

MIT License

---

## Author

Shiva Silmawala

Built with Next.js, TypeScript, and Headless WordPress.
