# Next.js / Shadcn - Starter (TS)

## Overview

This is a Next.js starter project configured with TypeScript, Tailwind CSS, and Shadcn UI. It supports server-side rendering (SSR), dark/light mode switching, and customizable color themes. The project provides a solid foundation for building scalable, flexible web applications with modern features and best practices.

## Features

-**TypeScript**: Ensures type safety and improves developer experience.
-**Tailwind CSS**: Utility-first CSS framework for fast and efficient styling.
-**Shadcn UI**: Component library for UI building blocks.
-**Next.js with SSR**: Server-side rendering for improved performance and SEO.
-**Dark/Light Mode**: Toggle between dark and light themes.
-**Customizable Color Themes**: Easily switch between predefined color themes.

## Installation

1. **Clone the Repository**

    `git clone https://github.com/your-repo/your-project.git
    cd your-project`

2. **Install Dependencies**

    `npm install`
    or
    `yarn install`

3. **Run the Development Server**

    `npm run dev`
    or
    `yarn dev`

    Open your browser and navigate to `http://localhost:3000`.

## Configuration

### Tailwind CSS

Tailwind CSS is configured with custom color variables and dark mode support. See `tailwind.config.ts` and `globals.css` for details on theme customization.

### Color Themes

Use the `ThemeToggle` component to switch between color themes. The available color themes from [tailwind-colors](https://tailwindcss.com/docs/customizing-colors) are `blue`, `violet`, `pink`, `green`, and `cyan`. All variables for dark and light mode were added to `globals.css`. You can add/remove/edit as you want there.

### Dark/Light Mode

Use the `ModeToggle` component to switch between dark and light modes. The mode is toggled using the button with a moon or sun icon. It doesn't use `next-theme` to avoid `client-use`; the dark/light version is SSR.

### Theme Configuration

The `theme-config.tsx` file defines the default theme configuration:

```tsx
export const defaultThemeConfig = {
  theme: 'light',
  color: 'green', // options: blue, violet, pink, green, cyan
}
```

The `theme-context.tsx` provides a context for managing and applying theme configurations globally. It uses cookies to persist user preferences. You can add more variables to it and use it like.

Usage

```tsx
import { ThemeConfigProvider, defaultThemeConfig } from '@/lib/theme-context'

export default function App({ Component, pageProps }) {
  return (
    <ThemeConfigProvider initialConfig={defaultThemeConfig}>
      <Component {...pageProps} />
    </ThemeConfigProvider>
  )
}
```

## Development

-**Code Style**: Follow the project's code style and linting rules.
-**Testing**: Add tests as necessary to ensure functionality and stability.
-**Contributing**: Feel free to open issues or submit pull requests.

### Dependencies

#### Core

-[Next.js](https://nextjs.org/) (v14.2.5)
-[React](https://reactjs.org/) (v18)
-[Tailwind CSS](https://tailwindcss.com/) (v3.4.1)
-[Shadcn](https://shadcn.dev/)

#### Utilities

-[Heroicons](https://heroicons.com/) (v2.1.5)
-[Radix UI](https://www.radix-ui.com/) (Dropdown Menu, Select, Slot)
-[Class Variance Authority](https://www.npmjs.com/package/class-variance-authority) (v0.7.0)
-[Clsx](https://www.npmjs.com/package/clsx) (v2.1.1)
-[Tailwind Merge](https://www.npmjs.com/package/tailwind-merge) (v2.5.2)
-[Tailwind CSS Animate](https://www.npmjs.com/package/tailwindcss-animate) (v1.0.7)

## License

This project is licensed under the MIT License.
