# CODE & CAPITAL Project

## Overview

CODE & CAPITAL is a professional portfolio website for a French company specializing in web development and trading services. The site presents their dual expertise in full-stack development and algorithmic trading strategies. The website features a modern, dark-themed design with floating UI elements and a distinctive "&lt;respect/&gt;" brand philosophy that emphasizes respect for code quality, deadlines, and clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML Structure**: Multi-page website built with semantic HTML5, organized into distinct sections (home, web development, trading, respect philosophy, contact)
- **CSS Framework**: Custom CSS with modern design patterns including CSS Grid, Flexbox, and CSS animations for floating elements
- **Typography System**: Google Fonts integration using Space Grotesk font family with multiple weights (300-700)
- **Responsive Design**: Mobile-first approach with viewport meta tags and fluid layouts
- **Navigation System**: Fixed header navigation with active state management across pages

### Design System
- **Color Scheme**: Dark theme with black background (#000000) and white text (#ffffff)
- **Visual Effects**: Backdrop blur filters, floating card elements, and smooth scroll behavior
- **Component Architecture**: Reusable CSS classes for headers, cards, navigation, and page sections
- **Animation Strategy**: CSS transitions and transforms for interactive elements

### Content Structure
- **Multi-language Support**: French language implementation with semantic HTML structure
- **Page Organization**: Dedicated pages for different service offerings (web development, trading, company values)
- **Asset Management**: Centralized image directory with logo and visual assets

### Performance Optimizations
- **Font Loading**: Preconnect to Google Fonts for faster font delivery
- **CSS Reset**: Comprehensive CSS reset for cross-browser consistency
- **Scroll Optimization**: Smooth scrolling implementation for better user experience

## External Dependencies

### Third-party Services
- **Google Fonts**: Space Grotesk font family hosted via Google Fonts CDN
- **Font Preconnection**: DNS prefetching for fonts.googleapis.com and fonts.gstatic.com

### Asset Dependencies
- **Logo Assets**: Custom logo image (images/logo.png) required for brand identity
- **Icon System**: Inline SVG icons for page headers and navigation elements

### Browser Requirements
- **Modern Browser Support**: CSS features require modern browser support for backdrop-filter, CSS Grid, and Flexbox
- **Responsive Breakpoints**: Mobile-first design assumes standard viewport sizes

### Development Tools
- **No Build Process**: Pure HTML/CSS implementation without bundlers or preprocessors
- **Static Hosting Ready**: Designed for deployment on static hosting platforms
- **SEO Optimized**: Proper meta tags, semantic HTML, and French language declarations