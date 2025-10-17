# FasterUI Agency Website

A modern, responsive agency landing page built with React, Vite, and Tailwind CSS. This is an exact replica of the Figma design provided.

## 🚀 Features

- **Modern Design**: Clean, gradient-based design with smooth animations
- **Responsive**: Works perfectly on all devices and screen sizes
- **Fast**: Built with Vite for lightning-fast development and builds
- **Styled with Tailwind**: Utility-first CSS framework for rapid development
- **Smooth Navigation**: Anchor links with smooth scrolling between sections

## 📋 Sections

1. **Header**: Navigation with logo and CTA button
2. **Hero**: Eye-catching gradient background with main heading
3. **Services**: "What We Do" section with service cards
4. **Pricing**: Pricing information with call-to-action
5. **Contact**: Contact form with gradient background
6. **Footer**: Simple footer with links and social icons

## 🛠️ Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. **Navigate to the project directory:**
   ```cmd
   cd "c:\Users\DELL\Desktop\website"
   ```

2. **Install dependencies:**
   ```cmd
   npm install
   ```

3. **Start the development server:**
   ```cmd
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The website should load with the agency design

## 🖼️ Adding Images

The website is configured to use the following images from the `public` folder:

- `hero.png` - Hero section background image
- `endspiral.png` - Decorative spiral element in contact section
- `endstar.png` - Decorative star element in contact section

Simply add these image files to the `public` folder and they will automatically appear in the website.

## 🏗️ Build for Production

To create a production build:

```cmd
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## 📁 Project Structure

```
website/
├── public/
│   ├── hero.png (add this)
│   ├── endspiral.png (add this)
│   └── endstar.png (add this)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Colors
The website uses Tailwind's default color palette. To customize colors, edit the `tailwind.config.js` file.

### Fonts
The website uses Inter font. To change fonts, update the font-family in `src/index.css`.

### Content
To modify text content, edit the respective component files in the `src/components/` directory.

## 🚀 Deployment

This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the built files from `dist` folder

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Support

If you encounter any issues or need modifications, please let me know!

## 📄 License

This project is created as a custom website implementation based on the provided Figma design.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
