# Dhanashri Patil - Professional Resume Portfolio

A modern, high-end black theme resume portfolio built with Next.js 14, featuring a sleek coder-inspired design with smooth animations and responsive layout.

## 🎨 Features

- **High-End Black Theme**: Modern dark theme with cyan/emerald neon accents
- **HR-Friendly Content**: Clean, readable text optimized for non-technical recruiters
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations for a polished experience
- **Interactive Elements**:
  - Mouse cursor glow effects
  - Hover animations on interactive elements
  - Smooth scroll behavior
  - Jump to top button
- **PDF Download**: Generate and download professional, text-selectable PDF using @react-pdf/renderer
- **AI/QA Skills**: Comprehensive skills list including AI-powered testing and agentic testing
- **Mac-Style Terminal**: Terminal window with Mac-like control buttons
- **Custom Favicon**: Themed favicon matching the design

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **PDF Generation**: @react-pdf/renderer (React-based PDF creation)
- **Language**: React (JavaScript)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Dhanashri-resume-UX
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Dhanashri-resume-UX/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.jsx           # Root layout with metadata
│   └── page.jsx             # Main page component
├── components/
│   ├── Resume.jsx           # Main resume component (Web View)
│   └── ResumePDFTwoColumn.jsx # PDF Document Component
├── public/
│   ├── favicon.svg          # Custom favicon
│   └── resume.pdf           # Sample resume PDF
├── package.json
├── tailwind.config.cjs      # Tailwind configuration
├── postcss.config.cjs       # PostCSS configuration
└── README.md                # This file
```

## 🎯 Key Features Explained

### PDF Download
Click the "Download PDF" button to generate a professional PDF version of the resume.

**Key Features:**
- **React-PDF**: Uses `@react-pdf/renderer` for precise layout control
- **Multi-Page Support**: Content flows naturally across pages with consistent sidebar
- **Text-Selectable**: High-quality text rendering
- **Premium Design**: Custom "Orange" theme optimized for print/PDF
- **A4 Format**: Standard A4 page size with professional margins

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-friendly buttons and spacing
- Optimized typography for all screen sizes

### Animations
- Staggered fade-in animations for sections
- Smooth hover effects on interactive elements
- Scroll-triggered animations
- Mouse cursor glow effect

### Skills Section
Includes comprehensive QA skills including:
- Traditional testing (Selenium, Cypress, Appium)
- AI-powered testing tools
- Agentic testing
- Machine Learning for QA
- Intelligent test generation

## 🛠️ Customization

### Changing Colors
Edit the color scheme in `components/Resume.jsx` (Web) or `components/ResumePDFTwoColumn.jsx` (PDF):
- Web Theme: Dark mode with Cyan/Emerald accents
- PDF Theme: White background with Orange accents

### Updating Content
Edit the content directly in `components/Resume.jsx` and `components/ResumePDFTwoColumn.jsx`.
**Note**: Ensure you update both files to keep the Web and PDF versions in sync.

### Modifying Animations
Animation delays and durations are set in the `motion` components using Framer Motion props.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Dependencies

```json
{
  "next": "14.2.3",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "framer-motion": "10.12.16",
  "@heroicons/react": "2.1.1",
  "@react-pdf/renderer": "^3.1.12"
}
```

## 📄 License

This project is private and personal.

## 👤 Author

**Dhanashri Patil**
- Email: patil.dhanuu23@gmail.com
- LinkedIn: [linkedin.com/in/patildhanashri](https://www.linkedin.com/in/patildhanashri)
- Location: Virar, Maharashtra, India

## 📋 PDF Generation Details

The PDF generation uses `@react-pdf/renderer` to create a React component-based PDF:

- **Method**: React components rendered to PDF stream
- **Format**: Native PDF text and vector graphics
- **Layout**: Flexbox-based layout engine (Yoga)
- **Quality**: Vector quality, perfect for printing
- **Styling**: CSS-like StyleSheet API

### PDF Generation Code Location
The PDF document structure is defined in `components/ResumePDFTwoColumn.jsx`.
The download trigger is in `components/Resume.jsx` using `PDFDownloadLink`.

## 🙏 Acknowledgments

- Built with Next.js 14
- Styled with Tailwind CSS
- Icons by Heroicons
- Animations by Framer Motion

---

**Note**: This is a personal portfolio project. For any questions or suggestions, please contact the author.

Last Updated: 2025-12-05


