# Dynamic Route Loading Demo

## Overview
This project demonstrates **React Lazy Loading** and **Code Splitting** techniques to optimize Single Page Application performance. Components are loaded on-demand rather than all at once, reducing initial bundle size and improving load times.

## Features Implemented
- **Lazy Loading**: Components load only when accessed
- **Suspense Boundary**: Loading states during component fetch
- **Code Splitting**: Automatic bundle optimization by Vite
- **Modern UI**: Gradient backgrounds with glassmorphism effects
- **Responsive Design**: Mobile-friendly navigation and layouts

## Technologies Used
- React 19.2.0 with lazy loading capabilities
- React Router DOM for client-side routing
- Vite for fast development and optimized builds
- Modern CSS with backdrop filters and animations

## Performance Benefits
- **Reduced Initial Load**: Only essential code loads initially
- **Faster Navigation**: Subsequent pages load instantly after first visit
- **Better UX**: Smooth loading states instead of blank screens
- **Bandwidth Efficient**: Users only download what they actually use

## Project Structure
```
src/
├── components/
│   ├── Home.jsx     # Dashboard page with lazy loading
│   ├── About.jsx    # Project overview page
│   └── Contact.jsx  # Contact information page
├── App.jsx          # Main app with routing and lazy loading
└── App.css          # Custom styles with modern effects
```

## Learning Outcomes
After completing this experiment, you will understand:
- How React.lazy() works for dynamic imports
- Suspense component for loading boundaries
- Code splitting strategies in modern React
- Performance optimization techniques
- Modern CSS styling approaches

## Getting Started
```bash
npm install
npm run dev
```

Navigate between different routes to experience the lazy loading functionality. The loading indicator appears briefly on first visit to each page.

## Deployment
This application is optimized for production deployment with automatic code splitting and bundle optimization.
