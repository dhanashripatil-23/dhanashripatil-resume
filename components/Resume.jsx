"use client";
// Updated: 2025-12-06

import { motion } from "framer-motion";
import ResumePDFTwoColumn from './ResumePDFTwoColumn';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { EnvelopeIcon, LinkIcon, ArrowDownTrayIcon, CodeBracketIcon, ArrowUpIcon, ShareIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";

export default function Resume() {
  const resumeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Mouse cursor effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareData = {
      title: "Dhanashri Patil - Software Test Engineer",
      text: "Check out my professional resume and portfolio. I'm a Software Test Engineer with expertise in automation, QA, and testing methodologies.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Use native Web Share API if available
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`
        );
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error sharing:", error);
      }
    }
  };

  const downloadPDF = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF } = await import('jspdf');

      // Create a professional resume template
      const pdfContainer = document.createElement('div');
      pdfContainer.style.cssText = `
        width: 210mm;
        min-height: 297mm;
        padding: 16mm 20mm;
        background: white;
        color: #2c3e50;
        font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
        font-size: 11px;
        line-height: 1.6;
        position: absolute;
        left: -9999px;
        top: -9999px;
      `;

      pdfContainer.innerHTML = `
        <div>
          <!-- Header -->
          <div style="margin-bottom: 10mm;">
            <div style="font-size: 28px; font-weight: 700; color: #1a1a1a; margin-bottom: 2mm; letter-spacing: 0.5px;">Dhanashri Patil</div>
            <div style="font-size: 12px; color: #555; font-weight: 600; letter-spacing: 0.3px; margin-bottom: 3mm;">SOFTWARE TEST ENGINEER</div>
            <div style="font-size: 10px; color: #666; line-height: 1.6;">
              <div style="margin-bottom: 1mm;">📍 Virar, Maharashtra, India | 📧 patil.dhanuu23@gmail.com</div>
              <div>🔗 linkedin.com/in/patildhanashri | 🌐 dhanashri.cc.cc</div>
            </div>
          </div>

          <hr style="border: none; border-top: 2.5px solid #1a1a1a; margin: 0 0 8mm 0; padding: 0;">

          <!-- Professional Summary -->
          <div style="margin-bottom: 8mm;">
            <div style="font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 3mm; text-transform: uppercase; letter-spacing: 1.2px;">Professional Summary</div>
            <div style="font-size: 10.5px; color: #444; line-height: 1.7; text-align: justify;">
              Results-driven Software Test Engineer with 5+ years of expertise in designing, executing, and managing comprehensive manual and automated testing strategies. Demonstrated proficiency in Selenium, Cypress, and Appium with a strong track record of improving QA processes. Skilled in test automation, defect management, and cross-functional collaboration within Agile environments. Recently upskilled in AI-driven testing technologies.
            </div>
          </div>

          <!-- Core Competencies -->
          <div style="margin-bottom: 8mm;">
            <div style="font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 3mm; text-transform: uppercase; letter-spacing: 1.2px;">Core Competencies</div>
            
            <div style="margin-bottom: 3mm;">
              <div style="font-weight: 600; color: #1a1a1a; font-size: 11px; margin-bottom: 1.5mm;">Testing & QA</div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Manual Testing<br/>
                • Test Automation<br/>
                • UI/UX Testing<br/>
                • API Testing<br/>
                • Regression Testing<br/>
                • Mobile App Testing
              </div>
            </div>

            <div style="margin-bottom: 3mm;">
              <div style="font-weight: 600; color: #1a1a1a; font-size: 11px; margin-bottom: 1.5mm;">Tools & Technologies</div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Selenium WebDriver<br/>
                • Cypress<br/>
                • Appium<br/>
                • JIRA<br/>
                • TestNG<br/>
                • Postman
              </div>
            </div>

            <div style="margin-bottom: 3mm;">
              <div style="font-weight: 600; color: #1a1a1a; font-size: 11px; margin-bottom: 1.5mm;">Professional Skills</div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Defect Tracking & Management<br/>
                • Test Planning & Strategy<br/>
                • Test Case Design<br/>
                • Root Cause Analysis<br/>
                • Risk Assessment<br/>
                • Agile Methodology
              </div>
            </div>

            <div>
              <div style="font-weight: 600; color: #1a1a1a; font-size: 11px; margin-bottom: 1.5mm;">Emerging Technologies</div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • AI-Powered Testing<br/>
                • Machine Learning for QA<br/>
                • Intelligent Test Generation<br/>
                • AI Analytics<br/>
                • Agentic Testing<br/>
                • AI-Driven Test Analysis
              </div>
            </div>
          </div>

          <!-- Professional Experience -->
          <div style="margin-bottom: 8mm;">
            <div style="font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 3mm; text-transform: uppercase; letter-spacing: 1.2px;">Professional Experience</div>
            
            <div style="margin-bottom: 4.5mm; page-break-inside: avoid;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5mm;">
                <div style="font-size: 11px; font-weight: 700; color: #1a1a1a;">Full-time Parenting (Career Break)</div>
                <div style="font-size: 10px; color: #666; text-align: right;">Jan 2024 – Present</div>
              </div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Proactively pursuing advanced training in AI testing tools and automation frameworks<br/>
                • Enhancing knowledge in emerging QA technologies for improved testing efficiency<br/>
                • Preparing for industry re-entry with latest expertise and innovations<br/>
                • Focusing on continuous learning and skill development
              </div>
            </div>

            <div style="margin-bottom: 4.5mm; page-break-inside: avoid;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5mm;">
                <div>
                  <div style="font-size: 11px; font-weight: 700; color: #1a1a1a;">Software Test Engineer</div>
                  <div style="font-size: 10.5px; color: #2c3e50; font-weight: 600;">TechBuzz</div>
                </div>
                <div style="font-size: 10px; color: #666; text-align: right;">May 2020 – Jul 2022<br/><span style="color: #999; font-size: 9.5px;">2 yrs 3 mos • On-site</span></div>
              </div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Designed, developed, and executed comprehensive manual & automated test suites<br/>
                • Identified critical defects and coordinated resolution with development teams<br/>
                • Created detailed test plans, test cases, and quality test documentation<br/>
                • Collaborated cross-functionally to ensure software quality and product reliability
              </div>
            </div>

            <div style="page-break-inside: avoid;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5mm;">
                <div>
                  <div style="font-size: 11px; font-weight: 700; color: #1a1a1a;">Software Test Engineer</div>
                  <div style="font-size: 10.5px; color: #2c3e50; font-weight: 600;">Integration Wizards Solutions Pvt. Ltd.</div>
                </div>
                <div style="font-size: 10px; color: #666; text-align: right;">Apr 2018 – May 2020<br/><span style="color: #999; font-size: 9.5px;">2 yrs 2 mos • Remote</span></div>
              </div>
              <div style="font-size: 10px; color: #555; line-height: 1.6; margin-left: 2mm;">
                • Progressed from Associate to Software Test Engineer with expanded QA responsibilities<br/>
                • Performed comprehensive UI, UX, and mobile application testing across iOS & Android<br/>
                • Developed test automation scripts using Selenium & Cypress, improving efficiency by 40%<br/>
                • Participated in Agile sprints and continuous quality improvement initiatives
              </div>
            </div>
          </div>

          <!-- Education -->
          <div style="margin-bottom: 8mm;">
            <div style="font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 3mm; text-transform: uppercase; letter-spacing: 1.2px;">Education</div>
            
            <div style="margin-bottom: 2.5mm;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="font-size: 10.5px; font-weight: 700; color: #1a1a1a;">Bachelor of Engineering – Electrical Engineering</div>
                <div style="font-size: 10px; color: #666;">2017</div>
              </div>
              <div style="font-size: 10px; color: #777;">VIVA Institute of Technology, Mumbai University</div>
            </div>

            <div style="margin-bottom: 2.5mm;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="font-size: 10.5px; font-weight: 700; color: #1a1a1a;">Diploma in Engineering – Electrical Engineering</div>
                <div style="font-size: 10px; color: #666;">2014</div>
              </div>
              <div style="font-size: 10px; color: #777;">Pravin Rohidas Patil College of Diploma Engineering & Technology</div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="font-size: 10.5px; font-weight: 700; color: #1a1a1a;">Secondary School Certificate</div>
                <div style="font-size: 10px; color: #666;">2011</div>
              </div>
              <div style="font-size: 10px; color: #777;">Aryan High School</div>
            </div>
          </div>

          <!-- Key Projects -->
          <div style="margin-bottom: 8mm;">
            <div style="font-size: 12px; font-weight: 700; color: #1a1a1a; margin-bottom: 3mm; text-transform: uppercase; letter-spacing: 1.2px;">Key Projects</div>
            
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5mm;">
                <div style="font-size: 10.5px; font-weight: 700; color: #1a1a1a;">Prototype Model of Electromagnetic Type Differential Relay</div>
                <div style="font-size: 10px; color: #666;">Aug 2016 – May 2017</div>
              </div>
              <div style="font-size: 10px; color: #555; line-height: 1.6;">
                Developed an advanced visual prototype demonstrating differential relay operations in industrial environments. Implemented sophisticated fault-clearing mechanisms and visual interfaces for enhanced understanding of relay functionality in complex power systems.
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding-top: 4mm; border-top: 1px solid #ddd; text-align: center; font-size: 9px; color: #999;">
            <div>Dhanashri Patil | Software Test Engineer | patil.dhanuu23@gmail.com | Available on request</div>
          </div>
        </div>
      `;

      document.body.appendChild(pdfContainer);

      // Capture as image
      const canvas = await html2canvas(pdfContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
      });

      document.body.removeChild(pdfContainer);

      // Convert to PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.80);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('Dhanashri_Patil_Resume.pdf');
    } catch (error) {
      console.error('PDF Error:', error);
      alert('Error generating PDF: ' + error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Glowing Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Mouse cursor effect */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-cyan-400/30 blur-md transition-all duration-300"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-t-lg p-3 flex items-center gap-2 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42] shadow-sm"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-cyan-400 text-xs sm:text-sm font-mono">resume.terminal</span>
            </div>
          </div>
        </motion.div>

        {/* Download and Share Buttons */}
        <div className="flex justify-end gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <ShareIcon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
            <span className="relative z-10">Share</span>
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>

          {isClient ? (
            <PDFDownloadLink
              document={<ResumePDFTwoColumn />}
              fileName="Dhanashri_Patil_Resume.pdf"
              className="group relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-lg text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {({ loading }) => (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  <span className="relative z-10">{loading ? "Generating..." : "Download PDF"}</span>
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </>
              )}
            </PDFDownloadLink>
          ) : (
            <button
              disabled
              className="group relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-lg text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 opacity-50 cursor-not-allowed"
            >
              <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              <span className="relative z-10">Loading...</span>
            </button>
          )}
        </div>

        {/* Resume Content */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0a0a0a] border border-cyan-500/20 rounded-lg shadow-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Code-like corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-500/20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-emerald-500/20"></div>

          {/* HEADER */}
          <div className="text-center mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-cyan-500/30 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-tight"
            >
              Dhanashri Patil
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-cyan-300 mb-4 sm:mb-6"
            >
              Software Test Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded border border-cyan-500/20 hover:border-cyan-500/40 transition-colors cursor-default">
                <span className="text-emerald-400">📍</span>
                <span>Virar, Maharashtra, India</span>
              </div>
              <a
                href="mailto:patil.dhanuu23@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded border border-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-pointer"
              >
                <EnvelopeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" />
                <span>patil.dhanuu23@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/patildhanashri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded border border-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-pointer"
              >
                <LinkIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" />
                <span>linkedin.com/in/patildhanashri</span>
              </a>
              <a
                href="https://dhanashri.cc.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded border border-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-400 transition-all cursor-pointer"
              >
                <span className="text-emerald-400">🔗</span>
                <span>dhanashri.cc.cc</span>
              </a>
            </motion.div>
          </div>

          {/* SUMMARY */}
          <section className="mb-8 sm:mb-10 relative">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                Professional Summary
              </h2>
            </div>
            <div className="pl-4 sm:pl-6 border-l-2 border-cyan-500/30">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                <span className="text-emerald-400 font-semibold">Results-oriented</span> software test engineer with expertise in automation and manual testing,
                passionate about ensuring <span className="text-cyan-400 font-semibold">robust and reliable</span> software releases through rigorous analysis
                and collaborative teamwork. Skilled in tools like <span className="text-emerald-300 font-semibold">Cypress</span> and <span className="text-emerald-300 font-semibold">Selenium</span>, with a knack for
                troubleshooting and process enhancement in Agile environments. Committed to delivering
                high-quality outcomes and learning new technologies to drive team and project success.
                During a recent career break, proactively upskilled in <span className="text-cyan-400 font-semibold">artificial intelligence (AI)</span>
                technologies, gaining knowledge in AI-driven testing tools and automation frameworks to
                enhance testing efficiency and innovation in future projects.
              </p>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                Work Experience
              </h2>
            </div>

            {/* Career Break */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800 relative pl-4 sm:pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300">
                  Full-time Parenting (Career Break)
                </h3>
                <span className="text-emerald-400 text-xs sm:text-sm md:text-base bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                  Jan 2024 - Present
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                After a meaningful pause to embrace marriage and motherhood, I'm excited to return with
                renewed energy and a commitment to upskilling in the latest technologies and <span className="text-cyan-400 font-semibold">AI</span>, ready
                to contribute effectively and grow professionally in software testing.
              </p>
            </motion.div>

            {/* Neon Laboratories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800 relative pl-4 sm:pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300">
                    Associate Project Manager <span className="text-base sm:text-lg font-normal text-gray-400">(Non-IT)</span>
                  </h3>
                  <p className="text-emerald-400 text-base sm:text-lg mt-1">Neon Laboratories Limited</p>
                </div>
                <div className="text-right sm:text-left sm:text-right">
                  <span className="text-cyan-400 text-xs sm:text-sm md:text-base block bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/30 inline-block">
                    Aug 2022 - Jan 2024
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm block mt-1">1 yr 6 mos • On-site</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                Gained valuable management experience in the pharmaceutical sector, overseeing comprehensive quality documentation and compliance.
                Honed organizational and leadership skills by coordinating cross-functional teams and ensuring strict adherence to regulatory standards (GMP).
                Successfully managed project timelines and audits, demonstrating versatility and attention to detail outside the IT domain.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Project Management", "Documentation", "Compliance", "Team Coordination", "Non-IT Experience"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/30 text-xs sm:text-sm hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* TechBuzz */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800 relative pl-4 sm:pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300">
                    Software Test Engineer
                  </h3>
                  <p className="text-emerald-400 text-base sm:text-lg mt-1">TechBuzz</p>
                </div>
                <div className="text-right sm:text-left sm:text-right">
                  <span className="text-cyan-400 text-xs sm:text-sm md:text-base block bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/30 inline-block">
                    May 2020 - Jul 2022
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm block mt-1">2 yrs 3 mos • On-site</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                Experienced Software Test Engineer with a strong focus on designing, executing, and
                maintaining manual and automated tests for web and mobile applications. Skilled in
                creating test plans, identifying defects, collaborating with cross-functional teams,
                and ensuring software meets quality standards. Proficient with testing tools like
                <span className="text-emerald-300 font-semibold"> Selenium</span> and <span className="text-emerald-300 font-semibold">Appium</span>, with a commitment to improving testing processes and delivering
                reliable, user-friendly software solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Software Testing", "Adhoc Testing", "Selenium", "Appium"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/30 text-xs sm:text-sm hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Integration Wizards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-6 relative pl-4 sm:pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300">
                    Software Test Engineer
                  </h3>
                  <p className="text-emerald-400 text-base sm:text-lg mt-1">Integration Wizards Solutions Private Limited</p>
                </div>
                <div className="text-right sm:text-left sm:text-right">
                  <span className="text-cyan-400 text-xs sm:text-sm md:text-base block bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/30 inline-block">
                    Apr 2018 - May 2020
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm block mt-1">2 yrs 2 mos • Remote</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                Transitioned from Associate Software Test Engineer to Software Test Engineer with
                enhanced responsibilities in creating and executing detailed test plans, identifying
                defects, and collaborating with development teams to improve software quality. Skilled
                in both manual and automated testing, contributing to test case design, defect tracking,
                and basic team coordination. Continuously developing technical skills in test automation
                and programming for stronger QA impact.
              </p>
              <div className="mt-4 mb-4 pl-4 border-l-2 border-emerald-500/20">
                <p className="text-xs sm:text-sm text-emerald-400 font-semibold mb-2">Previous Role:</p>
                <div className="pl-3 sm:pl-4 border-l-2 border-emerald-500/30">
                  <p className="text-cyan-300 font-medium text-sm sm:text-base">Associate Software Test Engineer</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">Oct 2017 - Apr 2018</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Seasoned UI & Mobile App Tester skilled in ensuring seamless user experiences for
                    websites and iOS/Android apps. Experienced in manual and automated testing, defect
                    tracking, and collaborating with development teams to deliver high-quality,
                    user-friendly products. Proficient in <span className="text-emerald-300 font-semibold">Selenium</span>, <span className="text-emerald-300 font-semibold">Cypress</span>, and industry-standard QA practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Data Structures", "Test Automation", "Cypress", "Selenium"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/30 text-xs sm:text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                Education
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-800 pl-4 sm:pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-2">
                Bachelor of Engineering - Electrical Engineering
              </h3>
              <p className="text-emerald-400 text-sm sm:text-base mb-1">VIVA Institute of Technology</p>
              <p className="text-gray-400 text-xs sm:text-sm">Mumbai University • Jun 2017</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-800 pl-4 sm:pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-2">
                Diploma - Electrical Engineering
              </h3>
              <p className="text-emerald-400 text-sm sm:text-base mb-1">
                Pravin Rohidas Patil College of Diploma Engineering & Technology
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Maharashtra State Board of Technical Education • May 2014</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="pl-4 sm:pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-2">
                Secondary School Certificate
              </h3>
              <p className="text-emerald-400 text-sm sm:text-base">Aryan High School • 2011</p>
            </motion.div>
          </section>

          {/* PROJECTS */}
          <section className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                Projects
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-4 pl-4 sm:pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300">
                  Prototype Model of Electromagnetic Type of Differential Relay
                </h3>
                <span className="text-emerald-400 text-xs sm:text-sm bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                  Aug 2016 - May 2017
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base pl-4 border-l-2 border-gray-800">
                The objective of this project is to have a clearer visual view of how a differential
                relay operates in the industries and how the fault clearing is done within the relay.
              </p>
            </motion.div>
          </section>

          {/* SKILLS */}
          <section className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <CodeBracketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                Skills
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {[
                "Mobile App Testing",
                "Software Test Engineer",
                "UI Testing",
                "Software Quality Assurance",
                "Selenium",
                "Cypress",
                "Appium",
                "Test Automation",
                "Manual Testing",
                "API Testing",
                "Agile Methodology",
                "Defect Tracking",
                "Test Planning",
                "Regression Testing",
                "Data Structures",
                "AI-Powered Testing",
                "Agentic Testing",
                "AI Test Automation",
                "Machine Learning for QA",
                "Intelligent Test Generation",
                "AI-Driven Test Analysis",
                "Automated Test Case Generation",
                "AI Quality Assurance",
                "Predictive Testing",
                "Natural Language Processing for Testing"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.02 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 text-cyan-300 rounded border border-cyan-500/30 text-xs sm:text-sm hover:from-cyan-500/20 hover:to-emerald-500/20 hover:border-cyan-500/50 hover:text-cyan-200 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </section>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-gray-500 mt-8 sm:mt-10 text-xs sm:text-sm"
        >
          Built with <span className="text-emerald-400">Next.js 14</span> + <span className="text-cyan-400">TailwindCSS</span> • Developed by <span className="text-cyan-400">Dhanashri Patil</span>
        </motion.p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </div>
  );
}
