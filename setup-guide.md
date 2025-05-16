# Portfolio Website Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- Visual Studio Code
- Git

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Create `.env` file in the root directory with:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Customize Content**
   - Update `src/components/sections/About.tsx` with your information
   - Update `src/components/sections/Experience.tsx` with your experience
   - Update `src/components/sections/Projects.tsx` with your projects
   - Update `src/components/sections/Skills.tsx` with your skills
   - Update social media links in `src/components/layout/Footer.tsx`

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure
```
src/
├── components/
│   ├── layout/       # Layout components
│   ├── sections/     # Main page sections
│   └── ui/           # Reusable UI components
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- EmailJS
- Lucide React Icons

## VS Code Recommended Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features