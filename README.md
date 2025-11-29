# Parsley Health IA Prototype

A Next.js prototype demonstrating the new information architecture and internal linking patterns for Parsley Health's SEO-driven content strategy.

## Features

- **Condition Hubs** (`/conditions/[slug]`) - SEO pillar pages with structured content
- **Blog Posts** (`/blog/[slug]`) - Evergreen articles with E-E-A-T elements
- **Lab Panels** (`/labs/[slug]`) - Product pages with safety net blocks
- **Care Services** (`/care/[slug]`) - Service pages with condition linking

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.

## Project Structure

```
app/
  conditions/     # Condition hub pages
  blog/          # Blog post pages
  labs/          # Lab panel pages
  care/          # Care service pages

src/
  data/          # Content data models
  components/    # Reusable UI components
```

## Deployment

This project is configured for deployment on Vercel.
