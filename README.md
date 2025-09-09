# pokemon-app

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, Next, TRPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Next.js** - Full-stack React framework
- **tRPC** - End-to-end type-safe APIs
- **Bun** - Runtime environment
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
pokemon-app/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Next, TRPC)
```

## Deployment URLs

### Production

- **Frontend (Web)**: <https://miniature-octo-broccoli-web.vercel.app>
- **Backend (Server)**: <https://miniature-octo-broccoli-server.vercel.app>

### Development

- **Frontend (Web)**: <http://localhost:3001>
- **Backend (Server)**: <http://localhost:3000>

## API Endpoints

The backend uses tRPC for type-safe API communication. All endpoints are accessible under `/trpc/` route.

### Available Procedures

#### Pokemon Router (`/trpc/pokemon.*`)

- **Health Check**: `/trpc/pokemon.healthCheck`
  - Method: GET
  - Returns: `"OK"`
  - Example: `curl "https://miniature-octo-broccoli-server.vercel.app/trpc/pokemon.healthCheck"`

- **Get Pokemons**: `/trpc/pokemon.getPokemos`
  - Method: GET
  - Returns: List of Pokemon with details
  - Example: `curl "https://miniature-octo-broccoli-server.vercel.app/trpc/pokemon.getPokemos"`

- **CORS Test**: `/trpc/pokemon.cors_test`
  - Method: GET
  - Returns: Current CORS_ORIGIN environment variable
  - Example: `curl "https://miniature-octo-broccoli-server.vercel.app/trpc/pokemon.cors_test"`

### Frontend Usage

The frontend automatically uses the correct backend URL based on the environment:

- Production: Uses `NEXT_PUBLIC_SERVER_URL` environment variable
- Development: Uses `http://localhost:3000`

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all apps
