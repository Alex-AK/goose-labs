# Goose Labs

A digital playground for self-hosting, automation, and delightful experiments. Built with Astro, TypeScript, and TailwindCSS.

## 🧾 About

Goose Labs is a minimal, fast static website showcasing self-hosting adventures, automation projects, and technical explorations. The site serves as both a project portfolio and consulting services showcase.

## ✨ Features

- **Fast & Minimal**: Built with Astro for optimal performance
- **Modern Stack**: TypeScript, TailwindCSS, and Markdown content
- **SEO Optimized**: Semantic HTML, Open Graph tags, and sitemap
- **Accessible**: WCAG compliant with proper ARIA labels
- **Mobile-First**: Responsive design that works everywhere
- **Zero JavaScript**: Pure HTML/CSS for maximum compatibility

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── content/
│   └── project/        # Markdown project logs
├── layouts/            # Page layouts
├── pages/              # Routes and pages
├── styles/             # Global styles
├── types.ts            # TypeScript type definitions
└── consts.ts          # Site configuration

public/                 # Static assets
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.ts` and can be easily customized:

- **Primary**: Orange (#f97316) - Main accent color

### Content

- Site configuration: `src/consts.ts`
- Project logs: `src/content/project/`
- Pages: `src/pages/`

## 🛠️ Built With

- [Astro](https://astro.build/) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Utility-first styling
- [Google Fonts](https://fonts.google.com/) - Roboto typography

## 📄 License

MIT License - feel free to use this project as inspiration for your own site!

## 📝 Note on Contributions

This repository is public for transparency and learning purposes, but it's primarily a personal project. I'm not actively seeking contributions or maintaining typical open source project standards (issue tracking, PR reviews, etc.). Feel free to fork and adapt for your own use!
