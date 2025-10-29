# React Task Manager (Vite + Tailwind CSS)

A modern React 18 application bootstrapped with Vite and styled with Tailwind CSS. It includes a task manager, users list (JSONPlaceholder API), dark mode, and a small component library (`Card`, `Button`).

## Live Demo

- Local (when running dev server): "http://localhost:5173"

> To deploy publicly (Netlify/Vercel/GitHub Pages), see Deploy section below.

## Features

- Task Manager with add/toggle/delete/filter and localStorage persistence
- Users list from JSONPlaceholder with search, pagination, and responsive grid
- Dark mode with persisted preference
- Reusable `Button` and `Card` components
- React Router pages with a shared layout

## Tech Stack

- React 18, React Router
- Vite 5
- Tailwind CSS 3
- ESLint

## Project Structure

```
React.js/
  app.jsx
  main.jsx
  index.html
  index.css
  Themecontext.jsx
  components/
    button.jsx
    card.jsx
    footer.jsx
    layout.jsx
    navigbar.jsx
    taskmanager.jsx
    userlist.jsx
    hooks/
      useAPI.js
      uselocalstorage.js
  tailwind.config.js
  postcss.config.cjs
  package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)

### Install
```bash
npm install
```

### Run (Development)
```bash
npm run dev
```
Then open: `http://localhost:5173`

### Build (Production)
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
Then open the URL printed in the terminal.

## Tailwind CSS

- Tailwind is configured via `tailwind.config.js` and `postcss.config.cjs`.
- Global styles and Tailwind layers live in `index.css`.

If styles aren’t showing:
- Ensure `index.css` is imported in `main.jsx`.
- Verify Tailwind content globs include your files:
  - `./index.html`
  - `./*.{js,jsx,ts,tsx}`
  - `./components/**/*.{js,jsx,ts,tsx}`
- Restart the dev server after changing Tailwind config.

## Routing

- Defined in `app.jsx` using `react-router-dom`.
- Layout wrapper in `components/layout.jsx` renders `Navbar`, `Footer`, and page content.

## API & Hooks

- `useApi(url)` fetches data and returns `{ data, loading, error }`.
- `useLocalStorage(key, initialValue)` persists state to localStorage.

Import from components using relative paths, for example inside `components/taskmanager.jsx`:
```js
import { useLocalStorage } from './hooks/uselocalstorage.js'
```

## Common Issues & Fixes

- Blank page but server OK:
  - Check browser console for import errors (wrong relative paths are common).
  - Ensure `main.jsx` mounts `App` into `#root` and imports `index.css`.
- Tailwind not applying styles:
  - Fix content globs in `tailwind.config.js`, then restart `npm run dev`.
  - Hard-refresh (Ctrl+F5) to clear cache.
- Dark mode not toggling:
  - `Themecontext.jsx` applies the `dark` class on `<html>`; ensure it’s wrapped via `ThemeProvider` in `main.jsx`.

## Deploy

- Netlify: drag-and-drop `dist/` after `npm run build`, or connect repo and set build command `npm run build` and publish directory `dist`.
- Vercel: import project, framework “Vite”, build `npm run build`, output `dist`.
- GitHub Pages: `npm run build` and publish the `dist` folder via Pages.

## Scripts

- `npm run dev` - Start Vite dev server (port 5173 by default)
- `npm run build` - Production build
- `npm run preview` - Preview production build

## License

This project is provided as-is for learning and demo purposes.
Sheila Mumbi.
