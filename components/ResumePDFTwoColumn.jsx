import React from 'react';
// Updated: 2025-12-06
import { Page, Text, View, Document, StyleSheet, Link, Font } from '@react-pdf/renderer';

// Define colors
const colors = {
    primary: '#ea580c', // Orange-600
    primaryLight: '#fff7ed', // Orange-50
    secondary: '#1f2937', // Gray-800
    text: '#374151', // Gray-700
    textLight: '#6b7280', // Gray-500
    border: '#e5e7eb', // Gray-200
    white: '#ffffff',
    accent: '#f97316', // Orange-500
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        paddingBottom: 20, // Reduced padding
    },
    // Fixed sidebar background that repeats on every page
    sidebarBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '32%',
        backgroundColor: colors.primaryLight,
        borderRightWidth: 1,
        borderRightColor: colors.border,
    },
    // Sidebar content positioned absolutely on the first page
    sidebarContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '32%',
        padding: 20,
        paddingTop: 25,
    },
    // Main content with margin to avoid sidebar
    main: {
        marginLeft: '32%',
        padding: 25,
        paddingTop: 25,
    },
    // Sidebar Styles
    sidebarSection: {
        marginBottom: 16, // Reduced
    },
    sidebarTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.primary,
        textTransform: 'uppercase',
        marginBottom: 8,
        letterSpacing: 1.2,
        borderBottomWidth: 1.5,
        borderBottomColor: 'rgba(234, 88, 12, 0.2)',
        paddingBottom: 3,
    },
    contactItem: {
        marginBottom: 6, // Reduced
    },
    contactLabel: {
        fontSize: 7,
        color: colors.textLight,
        marginBottom: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    contactValue: {
        fontSize: 8.5,
        color: colors.secondary,
        textDecoration: 'none',
        fontFamily: 'Helvetica-Bold',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    skillBadge: {
        fontSize: 7.5,
        color: colors.secondary,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: '3 6',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgba(234, 88, 12, 0.1)',
        marginRight: 4,
        marginBottom: 4,
    },
    educationItem: {
        marginBottom: 10, // Reduced
    },
    degree: {
        fontSize: 9,
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 1,
    },
    school: {
        fontSize: 8,
        color: colors.text,
        marginBottom: 1,
    },
    gradYear: {
        fontSize: 7.5,
        color: colors.textLight,
        fontStyle: 'italic',
    },

    // Main Content Styles
    header: {
        marginBottom: 16, // Reduced
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        paddingBottom: 10,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 3,
    },
    title: {
        fontSize: 13,
        color: colors.primary,
        fontWeight: 'medium',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    section: {
        marginBottom: 14, // Reduced
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.secondary,
        textTransform: 'uppercase',
        marginBottom: 8,
        letterSpacing: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitleLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
        marginLeft: 10,
    },
    summary: {
        fontSize: 9.5,
        lineHeight: 1.5,
        color: colors.text,
        textAlign: 'justify',
    },
    experienceItem: {
        marginBottom: 12, // Reduced
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    role: {
        fontSize: 10.5,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    company: {
        fontSize: 9.5,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 2,
    },
    date: {
        fontSize: 8.5,
        color: colors.textLight,
        fontStyle: 'italic',
    },
    bullet: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 2,
    },
    bulletPoint: {
        width: 10,
        fontSize: 12,
        color: colors.primary,
        lineHeight: 1,
    },
    bulletText: {
        flex: 1,
        fontSize: 9,
        lineHeight: 1.4,
        color: colors.text,
    },
});

const ResumePDFTwoColumn = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Fixed Background for Sidebar on all pages */}
            <View style={styles.sidebarBackground} fixed />

            {/* Sidebar Content - Absolute positioned on first page */}
            <View style={styles.sidebarContent}>
                {/* Contact Info */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Contact</Text>

                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Email</Text>
                        <Link src="mailto:patil.dhanuu23@gmail.com" style={styles.contactValue}>
                            patil.dhanuu23@gmail.com
                        </Link>
                    </View>

                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Phone</Text>
                        <Text style={styles.contactValue}>+91 80872 07454</Text>
                    </View>

                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Location</Text>
                        <Text style={styles.contactValue}>Virar, Maharashtra, India</Text>
                    </View>

                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>LinkedIn</Text>
                        <Link src="https://www.linkedin.com/in/patildhanashri" style={styles.contactValue}>
                            in/patildhanashri
                        </Link>
                    </View>

                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Portfolio</Text>
                        <Link src="https://dhanashri.cc.cc" style={styles.contactValue}>
                            dhanashri.cc.cc
                        </Link>
                    </View>
                </View>

                {/* Education */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Education</Text>

                    <View style={styles.educationItem}>
                        <Text style={styles.degree}>B.E. Electrical</Text>
                        <Text style={styles.school}>VIVA Institute of Technology</Text>
                        <Text style={styles.gradYear}>2017</Text>
                    </View>

                    <View style={styles.educationItem}>
                        <Text style={styles.degree}>Diploma Electrical</Text>
                        <Text style={styles.school}>Pravin Rohidas Patil College</Text>
                        <Text style={styles.gradYear}>2014</Text>
                    </View>

                    <View style={styles.educationItem}>
                        <Text style={styles.degree}>Secondary School Certificate</Text>
                        <Text style={styles.school}>Aryan High School</Text>
                        <Text style={styles.gradYear}>2011</Text>
                    </View>
                </View>

                {/* Skills */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Skills</Text>
                    <View style={styles.skillsContainer}>
                        {[
                            "Mobile App Testing",
                            "UI/UX Testing",
                            "Selenium WebDriver",
                            "Cypress",
                            "Appium",
                            "API Testing",
                            "JIRA",
                            "TestNG",
                            "Postman",
                            "Agile/Scrum",
                            "Defect Management",
                            "AI-Powered Testing",
                            "Agentic Testing",
                            "AI Test Automation",
                            "Machine Learning for QA",
                            "Intelligent Test Generation",
                            "Predictive Testing"
                        ].map((skill, i) => (
                            <Text key={i} style={styles.skillBadge}>{skill}</Text>
                        ))}
                    </View>
                </View>
            </View>

            {/* Main Content - Flows across pages */}
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>Dhanashri Patil</Text>
                    <Text style={styles.title}>Software Test Engineer</Text>
                </View>

                {/* Summary */}
                <View style={styles.section} wrap={false}>
                    <View style={styles.sectionTitle}>
                        <Text>Profile</Text>
                        <View style={styles.sectionTitleLine} />
                    </View>
                    <Text style={styles.summary}>
                        Results-driven Software Test Engineer with 5+ years of expertise in designing, executing, and managing comprehensive manual and automated testing strategies. Demonstrated proficiency in Selenium, Cypress, and Appium with a strong track record of improving QA processes. Skilled in test automation, defect management, and cross-functional collaboration within Agile environments. Recently upskilled in AI-driven testing technologies.
                    </Text>
                </View>

                {/* Experience */}
                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text>Experience</Text>
                        <View style={styles.sectionTitleLine} />
                    </View>

                    {/* Career Break */}
                    <View style={styles.experienceItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.role}>Full-time Parenting (Career Break)</Text>
                            <Text style={styles.date}>Jan 2024 – Present</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Proactively pursuing advanced training in AI testing tools and automation frameworks.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Enhancing knowledge in emerging QA technologies for improved testing efficiency.</Text>
                        </View>
                    </View>

                    {/* Neon Laboratories */}
                    <View style={styles.experienceItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.role}>Associate Project Manager (Non-IT)</Text>
                            <Text style={styles.date}>Aug 2022 – Jan 2024</Text>
                        </View>
                        <Text style={styles.company}>Neon Laboratories Limited | On-site</Text>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Gained valuable management experience overseeing quality documentation and compliance.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Honed leadership skills by coordinating cross-functional teams for operational excellence.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Managed audits and project timelines, ensuring adherence to regulatory standards (GMP).</Text>
                        </View>
                    </View>

                    {/* TechBuzz */}
                    <View style={styles.experienceItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.role}>Software Test Engineer</Text>
                            <Text style={styles.date}>May 2020 – Jul 2022</Text>
                        </View>
                        <Text style={styles.company}>TechBuzz | On-site</Text>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Designed, developed, and executed comprehensive manual & automated test suites.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Identified critical defects and coordinated resolution with development teams.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Created detailed test plans, test cases, and quality test documentation.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Collaborated cross-functionally to ensure software quality and product reliability.</Text>
                        </View>
                    </View>

                    {/* Integration Wizards */}
                    <View style={styles.experienceItem} wrap={false}>
                        <View style={styles.expHeader}>
                            <Text style={styles.role}>Software Test Engineer</Text>
                            <Text style={styles.date}>Apr 2018 – May 2020</Text>
                        </View>
                        <Text style={styles.company}>Integration Wizards Solutions Pvt. Ltd. | Remote</Text>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Progressed from Associate to Software Test Engineer with expanded QA responsibilities.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Performed comprehensive UI, UX, and mobile application testing across iOS & Android.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Developed test automation scripts using Selenium & Cypress, improving efficiency by 40%.</Text>
                        </View>
                        <View style={styles.bullet}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>Participated in Agile sprints and continuous quality improvement initiatives.</Text>
                        </View>
                    </View>
                </View>

                {/* Projects */}
                <View style={styles.section} wrap={false}>
                    <View style={styles.sectionTitle}>
                        <Text>Key Projects</Text>
                        <View style={styles.sectionTitleLine} />
                    </View>

                    <View style={styles.experienceItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.role}>Electromagnetic Differential Relay Prototype</Text>
                            <Text style={styles.date}>Aug 2016 – May 2017</Text>
                        </View>
                        <Text style={styles.summary}>
                            Developed an advanced visual prototype demonstrating differential relay operations in industrial environments. Implemented sophisticated fault-clearing mechanisms and visual interfaces.
                        </Text>
                    </View>
                </View>

            </View>
        </Page>
    </Document>
);

export default ResumePDFTwoColumn;
