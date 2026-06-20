# K72 

A small React project built with Vite that reproduces a fullscreen agency-style landing with video background, GSAP animations and a custom fullscreen navigation. Designed as a front-end demo/portfolio template.

## Features
- Fullscreen video background on the home page
- Animated page transitions and fullscreen nav using GSAP
- Scroll-driven effects with ScrollTrigger
- Tailwind CSS for styling and custom fonts
- React Router for multi-page routing (Home, Projects, Agence)
- Simple responsive layout and animated project grid

## Tech stack
- React (Vite)
- Vite
- Tailwind CSS
- GSAP (ScrollTrigger)
- react-router-dom

## Repo structure (important files)
- src/App.jsx — routes and main layout
- src/pages/Home.jsx, Projects.jsx, Agence.jsx — page components
- src/components — UI pieces (Navbar, FullScreenNav, Video, Stairs, projectCard, etc.)
- src/context/NavContext.jsx — navigation state & color logic
- src/index.css — Tailwind import + custom fonts and global styles
- vite.config.js — Vite + Tailwind plugin config and HMR tweaks
- public/fonts — expected fonts and video (e.g. /fonts/video.mp4, Lausanne .woff2)

## Setup (Windows)
1. Open a terminal in the project root (VS Code integrated terminal recommended).
2. Install dependencies:
   npm install
3. Run the dev server:
   npm run dev
4. Open the shown local URL (usually http://localhost:5173)

Notes:
- Ensure the fonts and video files are placed in public/fonts as referenced in the code.
- vite.config.js includes a Tailwind plugin exclusion and polling to avoid HMR issues on some setups.
- GSAP ScrollTrigger is registered in pages that use scroll animations.

## Scripts
- npm run dev — start dev server
- npm run build — build for production
- npm run preview — preview production build (vite)

## Credits
Special thanks to Sherians Coding School.

## Contributing
Feel free to fork, tweak styles/animations, and open PRs. Keep GSAP registrations and ScrollTrigger usage consistent to avoid duplicate registrations.
