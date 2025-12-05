import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const themeColor = '#ea580c'; // Orange-600
const lightThemeColor = '#fff7ed'; // Orange-50
const darkText = '#1f2937'; // Gray-800
const lightText = '#6b7280'; // Gray-500

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 24,
        borderBottomWidth: 2,
        borderBottomColor: themeColor,
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    headerLeft: {
        flex: 1,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold', // Helvetica-Bold
        color: themeColor,
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    title: {
        fontSize: 14,
        color: darkText,
        fontWeight: 'bold', // Helvetica-Bold
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    headerRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    contactItem: {
        fontSize: 9,
        color: lightText,
        marginBottom: 2,
        textAlign: 'right',
    },
    link: {
        color: themeColor,
        textDecoration: 'none',
    },
    section: {
        marginBottom: 18,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold', // Helvetica-Bold
        color: themeColor,
        textTransform: 'uppercase',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        paddingBottom: 4,
        letterSpacing: 0.5,
    },
    summaryText: {
        fontSize: 10,
        lineHeight: 1.6,
        color: darkText,
        textAlign: 'justify',
    },
    experienceItem: {
        marginBottom: 12,
    },
    roleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    roleTitle: {
        fontSize: 11,
        fontWeight: 'bold', // Helvetica-Bold
        color: darkText,
    },
    dateLocation: {
        fontSize: 9,
        color: lightText,
        fontStyle: 'italic', // Helvetica-Oblique
    },
    companyName: {
        fontSize: 10,
        fontWeight: 'bold', // Helvetica-Bold
        color: themeColor,
        marginBottom: 4,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 4,
    },
    bullet: {
        width: 12,
        fontSize: 12,
        color: themeColor,
        lineHeight: 1,
    },
    bulletText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: darkText,
        flex: 1,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    skillBadge: {
        fontSize: 9,
        backgroundColor: lightThemeColor,
        color: themeColor,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fed7aa', // Orange-200
    },
    educationItem: {
        marginBottom: 8,
    },
    projectItem: {
        marginBottom: 10,
    },
});

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.name}>Dhanashri Patil</Text>
                    <Text style={styles.title}>Software Test Engineer</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.contactItem}>📍 Virar, Maharashtra, India</Text>
                    <Link src="mailto:patil.dhanuu23@gmail.com" style={[styles.contactItem, styles.link]}>patil.dhanuu23@gmail.com</Link>
                    <Link src="https://www.linkedin.com/in/patildhanashri" style={[styles.contactItem, styles.link]}>linkedin.com/in/patildhanashri</Link>
                    <Link src="https://dhanashri.cc.cc" style={[styles.contactItem, styles.link]}>dhanashri.cc.cc</Link>
                </View>
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.summaryText}>
                    Results-driven Software Test Engineer with 5+ years of expertise in designing, executing, and managing comprehensive manual and automated testing strategies. Demonstrated proficiency in Selenium, Cypress, and Appium with a strong track record of improving QA processes. Skilled in test automation, defect management, and cross-functional collaboration within Agile environments. Recently upskilled in AI-driven testing technologies.
                </Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Core Competencies</Text>
                <View style={styles.skillsContainer}>
                    {[
                        "Manual Testing", "Test Automation", "Selenium WebDriver", "Cypress", "Appium",
                        "API Testing", "JIRA", "TestNG", "Postman", "Agile Methodology",
                        "Defect Management", "AI-Powered Testing", "Agentic Testing"
                    ].map((skill, index) => (
                        <Text key={index} style={styles.skillBadge}>{skill}</Text>
                    ))}
                </View>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Experience</Text>

                {/* Career Break */}
                <View style={styles.experienceItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Full-time Parenting (Career Break)</Text>
                        <Text style={styles.dateLocation}>Jan 2024 – Present</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Proactively pursuing advanced training in AI testing tools and automation frameworks.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Enhancing knowledge in emerging QA technologies for improved testing efficiency.</Text>
                    </View>
                </View>

                {/* TechBuzz */}
                <View style={styles.experienceItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Software Test Engineer</Text>
                        <Text style={styles.dateLocation}>May 2020 – Jul 2022</Text>
                    </View>
                    <Text style={styles.companyName}>TechBuzz | On-site</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Designed, developed, and executed comprehensive manual & automated test suites.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Identified critical defects and coordinated resolution with development teams.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Created detailed test plans, test cases, and quality test documentation.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Collaborated cross-functionally to ensure software quality and product reliability.</Text>
                    </View>
                </View>

                {/* Integration Wizards */}
                <View style={styles.experienceItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Software Test Engineer</Text>
                        <Text style={styles.dateLocation}>Apr 2018 – May 2020</Text>
                    </View>
                    <Text style={styles.companyName}>Integration Wizards Solutions Pvt. Ltd. | Remote</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Progressed from Associate to Software Test Engineer with expanded QA responsibilities.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Performed comprehensive UI, UX, and mobile application testing across iOS & Android.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Developed test automation scripts using Selenium & Cypress, improving efficiency by 40%.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Participated in Agile sprints and continuous quality improvement initiatives.</Text>
                    </View>
                </View>
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.educationItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Bachelor of Engineering – Electrical</Text>
                        <Text style={styles.dateLocation}>2017</Text>
                    </View>
                    <Text style={{ fontSize: 9, color: lightText }}>VIVA Institute of Technology, Mumbai University</Text>
                </View>
                <View style={styles.educationItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Diploma in Engineering – Electrical</Text>
                        <Text style={styles.dateLocation}>2014</Text>
                    </View>
                    <Text style={{ fontSize: 9, color: lightText }}>Pravin Rohidas Patil College</Text>
                </View>
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Projects</Text>
                <View style={styles.projectItem}>
                    <View style={styles.roleHeader}>
                        <Text style={styles.roleTitle}>Electromagnetic Differential Relay Prototype</Text>
                        <Text style={styles.dateLocation}>Aug 2016 – May 2017</Text>
                    </View>
                    <Text style={styles.summaryText}>
                        Developed an advanced visual prototype demonstrating differential relay operations in industrial environments. Implemented sophisticated fault-clearing mechanisms and visual interfaces.
                    </Text>
                </View>
            </View>

        </Page>
    </Document>
);

export default ResumePDF;
