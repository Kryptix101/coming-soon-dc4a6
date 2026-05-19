# Coming Soon Page

A minimal and elegant coming-soon page built with Next.js 14 and Tailwind CSS, featuring a dark theme with cyan accents.

## Features

- 🌙 Dark theme with cyan gradient accents
- 📧 Email capture form with validation
- 🎨 Beautiful animations and micro-interactions
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 App Router
- 🎭 Tailwind CSS for styling
- ✨ Smooth hover effects and transitions
- 🔒 TypeScript for type safety

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Colors
The cyan accent colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  cyan: {
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
  },
},
```

### Content
Update the title, subtitle, and messaging in `app/page.tsx`.

### Animations
Custom animations are defined in `tailwind.config.js` and can be modified or extended.

## Build for Production

```bash
npm run build
npm run start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## License

MIT License - feel free to use this project for your own coming-soon page!
