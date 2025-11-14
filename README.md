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
- **PDF Download**: Generate and download resume as PDF
- **AI/QA Skills**: Comprehensive skills list including AI-powered testing and agentic testing
- **Mac-Style Terminal**: Terminal window with Mac-like control buttons
- **Custom Favicon**: Themed favicon matching the design

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **PDF Generation**: jsPDF + html2canvas
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
│   └── Resume.jsx           # Main resume component
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
Click the "Download PDF" button to generate a PDF version of the resume. The PDF maintains the dark theme and all styling.

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
Edit the color scheme in `components/Resume.jsx`:
- Cyan: `cyan-400`, `cyan-500`, `cyan-600`
- Emerald: `emerald-400`, `emerald-500`, `emerald-600`
- Background: `black`, `#0a0a0a`

### Updating Content
Edit the content directly in `components/Resume.jsx`:
- Personal information (name, contact, etc.)
- Work experience
- Education
- Skills
- Projects

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
  "jspdf": "^2.5.1",
  "html2canvas": "^1.4.1"
}
```

## 📄 License

This project is private and personal.

## 👤 Author

**Dhanashri Patil**
- Email: patil.dhanuu23@gmail.com
- LinkedIn: [linkedin.com/in/patildhanashri](https://www.linkedin.com/in/patildhanashri)
- Location: Virar, Maharashtra, India

## 🙏 Acknowledgments

- Built with Next.js 14
- Styled with Tailwind CSS
- Icons by Heroicons
- Animations by Framer Motion

---

**Note**: This is a personal portfolio project. For any questions or suggestions, please contact the author.

