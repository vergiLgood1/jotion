# Jotion Case Study

## Year

2026

## Services

Product Strategy  
Art Direction  
Voice & Tone  
UI  
UX  
Next.js  
React  
Tailwind CSS  
Convex  
Clerk  
BlockNote  
EdgeStore  
GSAP  
WebGL  
Motion  
Vercel

## Summary

Designed and developed Jotion, a full-stack document workspace for capturing notes, organizing nested pages, writing with a rich editor, and publishing selected documents as public previews. The project emphasizes a calm but premium interface, practical workspace flows, and a marketing experience that feels immersive without sacrificing performance or clarity.

Visit site

## Problem

The product needed to feel more complete than a simple note-taking clone. It had to communicate trust, support real writing workflows, and reduce the friction between creating private documents, organizing work, and sharing finished pages publicly.

The marketing page also needed to avoid a common issue in animation-heavy interfaces: users seeing layout jumps, delayed assets, or incomplete visual states while the page was still loading.

## Goals

Create a focused document workspace with authenticated private access.

Support nested documents, rich content, cover images, icons, archive recovery, and public previews.

Design a marketing page that feels polished, immersive, and aligned with the product's calm workspace identity.

Implement route-level protection for private and public pages using the current Next.js 16 proxy model.

Keep the experience responsive, performant, and stable across desktop and mobile breakpoints.

## Process

Mapped the application around three core experiences: marketing discovery, private workspace editing, and public document preview.

Defined the document data model in Convex with ownership, hierarchy, archive status, publication status, content, icon, and cover image fields.

Built the authenticated workspace using Clerk and Convex, ensuring document actions validate both authentication and ownership.

Implemented the rich editor with BlockNote and connected image uploads to EdgeStore for document cover and content media flows.

Created a marketing page with a dark-mode-locked visual direction, GSAP reveal animations, WebGL background treatment, and a custom preloader that waits for critical readiness signals before revealing the page.

Upgraded the stack to Next.js 16 and replaced legacy middleware expectations with `proxy.ts` route protection.

## Challenges

Balancing a calm writing interface with enough visual personality to make the product feel memorable.

Keeping the marketing page immersive while avoiding janky transitions, delayed canvas rendering, and late-loading asset jumps.

Migrating to Next.js 16 while resolving compatibility issues with older editor dependencies and the new Turbopack development pipeline.

Maintaining clear public/private routing rules across marketing, document workspace, public preview, and API routes.

Ensuring uploaded cover images and generated blob previews work correctly with Next.js image requirements and memory cleanup.

## Results

Delivered a document workspace with authentication, nested pages, rich editing, cover images, icons, archive recovery, search, and public previews.

Established a stronger marketing surface with immersive motion, custom preloading, and dark-mode visual consistency.

Upgraded the application to Next.js 16 with modern route protection through `proxy.ts`.

Resolved editor compatibility issues by upgrading BlockNote and Mantine to versions compatible with the newer framework environment.

Improved upload stability by fixing blob preview image handling and cleaning up object URLs to prevent memory leaks.

## Lessons

Strong workspace products depend on the relationship between data modeling, route protection, and interface rhythm as much as visual design.

Animation-heavy marketing pages need real readiness checks, not decorative loading screens, if the goal is to prevent visual instability.

Major framework upgrades are safest when handled as dependency compatibility work, not only package version changes.

Public sharing features require backend authorization rules in addition to frontend route decisions.

Small details like image sizing, preloader sequencing, and document hierarchy behavior have a significant impact on perceived product quality.
