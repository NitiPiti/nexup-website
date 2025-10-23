# NexUp AI

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful hero section with 3D robot animation using Spline.

## Features

- 🚀 **Modern Design**: Clean, professional design
- 🤖 **3D Robot Animation**: Interactive 3D scene in the hero section using Spline
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎨 **Modern UI**: Beautiful components with Tailwind CSS
- 📊 **Interactive Elements**: Accordion FAQ, pricing toggles, and smooth animations

## Sections

1. **Navigation**: Sticky header with mobile menu
2. **Hero Section**: Eye-catching hero with 3D robot animation
3. **Process Section**: Step-by-step process explanation
4. **Features Section**: Comprehensive feature showcase
5. **Testimonials**: Customer testimonials and social proof
6. **Pricing**: Three-tier pricing with monthly/yearly toggle
7. **FAQ**: Expandable FAQ section with accordion
8. **Footer**: Complete footer with links and company info

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **3D Animation**: Spline (@splinetool/react-spline)
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   ├── accordion.tsx     # Accordion component
│   │   ├── spotlight.tsx    # Spotlight effect
│   │   └── splite.tsx       # Spline 3D scene component
│   ├── navigation.tsx       # Navigation header
│   ├── hero-section.tsx    # Hero section with 3D animation
│   ├── process-section.tsx  # Process explanation
│   ├── features-section.tsx # Features showcase
│   ├── testimonials-section.tsx # Testimonials
│   ├── pricing-section.tsx  # Pricing plans
│   ├── faq-section.tsx     # FAQ accordion
│   └── footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
└── package.json             # Dependencies and scripts
```

## Key Components

### Hero Section with 3D Animation
The hero section features an interactive 3D robot animation using Spline. The animation is positioned on the right side of the hero content, creating an engaging visual experience.

### Responsive Design
All components are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Mobile navigation menu

### Interactive Elements
- **Accordion FAQ**: Smooth expand/collapse animations
- **Pricing Toggle**: Monthly/yearly billing switch
- **Hover Effects**: Subtle hover animations on cards and buttons
- **Smooth Scrolling**: Navigation links with smooth scrolling

## Customization

### Colors
The design uses a blue color scheme that can be easily customized in the Tailwind config:
- Primary: Blue (#2563eb)
- Secondary: Gray tones
- Accent: Various colors for feature icons

### Content
All content is easily editable in the respective component files. The FAQ, pricing, and testimonials can be updated by modifying the data arrays in each component.

### 3D Animation
The Spline scene can be replaced by updating the `scene` prop in the `SplineScene` component within the hero section.

## Performance

- **Optimized Images**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **3D Performance**: Efficient 3D rendering with Spline

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

## Contributing

Feel free to submit issues and enhancement requests!
