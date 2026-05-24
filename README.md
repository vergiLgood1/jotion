# Jotion

Jotion is a full-stack collaborative document workspace inspired by modern note-taking products. It combines authenticated private workspaces, nested documents, rich editing, file uploads, public document previews, trash recovery, and a polished marketing site built on the Next.js App Router.

The project is built as a production-oriented web application with route protection, real-time data persistence, serverless file storage, theme support, and an immersive marketing preloader designed to prevent layout shifts while critical assets are loading.

## Features

- Private document workspace protected by Clerk authentication.
- Nested document tree with parent-child page relationships.
- Rich text editor powered by BlockNote.
- Cover image uploads through EdgeStore.
- Document icons, title editing, and content persistence.
- Full-text style document search command menu.
- Trash archive, recursive restore, and permanent deletion flows.
- Public preview route for published documents.
- Marketing page with dark-mode lock, WebGL visual treatment, GSAP animations, and a custom preloader.
- Next.js 16 `proxy.ts` route protection for private and public routes.
- Theme support through `next-themes` for the application workspace.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| Runtime / Package Manager | Bun |
| UI | React 18, Tailwind CSS 4, Radix UI |
| Authentication | Clerk |
| Database / Backend | Convex |
| Editor | BlockNote |
| File Uploads | EdgeStore |
| Animation | GSAP, OGL/WebGL |
| Icons | Lucide React |
| Validation | Zod |
| Linting | ESLint 9, `eslint-config-next` |

## Application Structure

```txt
app/
  (marketing)/              Marketing landing page
  (main)/                   Authenticated workspace routes
  (public)/                 Public preview routes
  api/edgestore/            EdgeStore route handler
components/                 Shared UI, editor, modals, providers
convex/                     Convex schema, queries, and mutations
hooks/                      Client-side state and utility hooks
lib/                        Shared utilities and service clients
public/assets/              Static icons and image assets
proxy.ts                    Next.js route protection proxy
```

## Route Model

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Marketing page |
| `/documents` | Private | Workspace home |
| `/documents/[documentId]` | Private | Editable document page |
| `/preview/[documentId]` | Public | Published document preview |
| `/api/edgestore/[...edgestore]` | API | File upload handling |

Authentication is enforced by `proxy.ts` using Clerk. Unauthenticated users are blocked from `/documents(.*)`, while authenticated users visiting `/` are redirected to `/documents`.

## Data Model

The primary Convex table is `documents`:

```ts
documents: {
  title: string;
  userId: string;
  isArchived: boolean;
  parentDocument?: Id<"documents">;
  content?: string;
  coverImage?: string;
  icon?: string;
  isPublished: boolean;
}
```

Indexes:

- `by_user` for user-scoped document lists.
- `by_user_parent` for nested sidebar trees.

## Prerequisites

- Bun installed locally.
- Clerk application configured.
- Convex project configured.
- EdgeStore project configured.

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

Depending on your Clerk setup, you may also need additional Clerk redirect or domain variables for production.

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open the app:

```txt
http://localhost:3000
```

Start Convex development in a separate terminal when working on backend functions:

```bash
bunx convex dev
```

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Next.js development server |
| `bun run build` | Create a production build |
| `bun run start` | Start the production server |
| `bun run lint` | Run ESLint |

## Quality Checks

Run linting:

```bash
bun run lint
```

Run a production build:

```bash
bun run build
```

Current lint status may include a non-blocking warning in `convex/auth.config.ts` for anonymous default export.

## Marketing Page Preloader

The marketing page includes a custom preloader that waits for critical page readiness signals before revealing the page. It tracks fonts, theme readiness, image preloading, and WebGL availability to reduce visual jumps and late-loading asset shifts.

The implementation lives in:

- `app/(marketing)/_components/marketing-preloader.tsx`
- `hooks/use-preloader.ts`
- `lib/preloader-utils.ts`

## Authentication And Authorization

Authentication is handled by Clerk and synchronized with Convex through `ConvexProviderWithClerk`.

Server-side route protection is handled by `proxy.ts`:

- `/documents(.*)` requires authentication.
- `/preview(.*)` remains publicly accessible.
- Authenticated users visiting `/` are redirected to `/documents`.

Convex functions also validate ownership before reading or mutating private documents, so route protection is backed by backend authorization checks.

## Deployment

The app is optimized for deployment on Vercel.

Before deploying, configure the same environment variables in your hosting provider:

- Clerk keys
- Convex deployment URL and deployment identifier
- EdgeStore keys

Then build with:

```bash
bun run build
```

## Notes

- This project currently uses React 18 with Next.js 16.
- Next.js 16 uses `proxy.ts` for request interception and route protection.
- BlockNote and Mantine are upgraded to modern versions for Next.js 16/Turbopack compatibility.
- The workspace pages still include client-side auth fallback checks in addition to proxy-level protection.

## License

This project is private. Add a license before distributing or open-sourcing it.
