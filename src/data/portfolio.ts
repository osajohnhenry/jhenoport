import card1 from '../assets/images/portfolio-images/card-1.jpg';
import card2 from '../assets/images/portfolio-images/card-2.jpg';
import card3 from '../assets/images/portfolio-images/card-3.png';
import card4 from '../assets/images/portfolio-images/card-4.png';
import card5 from '../assets/images/portfolio-images/card-5.png';
import card6 from '../assets/images/portfolio-images/card-6.png';
import cert1 from '../assets/images/blog/cert-1.png';
import cert2 from '../assets/images/blog/cert-2.png';
import cert3 from '../assets/images/blog/cert-3.png';
import cert4 from '../assets/images/blog/cert-4.png';
import cert5 from '../assets/images/blog/cert-5.png';
import cert6 from '../assets/images/blog/cert-6.png';
import cert7 from '../assets/images/blog/cert-7.png';
import paideskLogo from '../assets/images/paidesk-logo.jpg';
import teoLogo from '../assets/images/teo-logo.png';
import personMain from '../assets/images/person2.jpg';
import personAlt from '../assets/images/person.jpg';
import personHover from '../assets/images/person-hover2.jpg';
import personHover2 from '../assets/images/person-hover.jpg';
import logo from '../assets/logo.png';

export { logo, personMain, personAlt, personHover, personHover2 };

export const profile = {
  name: 'John Henry Osa',
  firstName: 'John Henry',
  role: 'Software Quality Assurance Analyst',
  tagline:
    "I'm a Software Quality Assurance Analyst with experience testing web, mobile, and desktop applications. I help teams ship stable, error-free releases through rigorous manual testing and close collaboration with developers.",
  location: 'Malanday, Valenzuela City, NCR',
  email: 'johnhenryosa2@gmail.com',
  phone: '+63 905 511 6752',
  cvLink:
    'https://drive.google.com/file/d/11xJke35gH4PLvE3uwuolOvidsRgVvoY1/view?usp=sharing',
  github: 'https://github.com/osajohnhenry',
  linkedin: 'https://www.linkedin.com/',
  startDate: '2024-08-19',
};

export function getYearsOfExperience(since = profile.startDate): string {
  const start = new Date(since).getTime();
  const now = Date.now();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  if (years < 1) {
    const months = Math.max(1, Math.round(years * 12));
    return `${months}+ months`;
  }
  return `${years.toFixed(1)}`;
}

export const stats = [
  { label: 'Years of Experience', value: getYearsOfExperience() },
  { label: 'Projects Involved', value: '15' },
  { label: 'Companies Worked At', value: '2' },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'certifications', label: 'Courses' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  'Manual Testing',
  'Functional Testing',
  'Regression Testing',
  'Smoke Testing',
  'End-to-End Testing',
  'API Testing (Postman)',
  'Test Case Design',
  'Jira & Defect Tracking',
  'SDLC / STLC',
  'Cross-browser Testing',
  'Mobile Testing',
  'Exploratory Testing',
];

export const workflowSteps = [
  {
    id: 1,
    title: 'Understanding Requirements',
    description:
      'Work with Business Analysts to gather data and understand project requirements and use cases.',
  },
  {
    id: 2,
    title: 'Test Planning & Scenarios',
    description:
      'Plan testing, analyze applicable test scenarios, write test cases, and prepare the test environment.',
  },
  {
    id: 3,
    title: 'Validating Design vs Output',
    description:
      'Collaborate with designers to validate that implemented outputs align with approved designs.',
  },
  {
    id: 4,
    title: 'Test Execution & Bug Resolution',
    description:
      'Execute test cases, do exploratory testing, and collaborate with developers to resolve issues found.',
  },
];

export type Project = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  testingConducted: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    image: card1,
    category: 'QA Testing',
    title: 'BGC Bus App',
    description:
      'Transport app for commuters to pay bus fare and track arrival times to their nearest station.',
    testingConducted: [
      'Validated guest access and restricted feature handling for unregistered users',
      'Tested QR payment system and e-wallet transaction flow for registered users',
      'Verified real-time bus arrival tracking and departure indicators on the route map',
      'Tested discount application and validation process for eligible users',
    ],
    tags: ['Mobile', 'Payments', 'Real-time'],
  },
  {
    id: 2,
    image: card2,
    category: 'QA Testing',
    title: 'San Pedro App',
    description:
      'Citizen app for emergency assistance requests and tracking the latest government news.',
    testingConducted: [
      'Tested user registration and login workflow with various input scenarios',
      'Tested emergency request submission and notification system for accuracy',
      'Tested GIS map-based incident tracking for real-time updates and location accuracy',
      'Validated statistics dashboard for accurate real-time data representation',
      'Tested Clerk and Command Center roles for manual case management',
      "Tested Admin role's approval and rejection of resident profile updates",
    ],
    tags: ['Mobile', 'GIS', 'Roles'],
  },
  {
    id: 3,
    image: card3,
    category: 'QA Testing',
    title: 'Mission Eye',
    description:
      'GIS-based situational awareness and incident tracking platform with real-time operational map view.',
    testingConducted: [
      'Validated GIS interactive map rendering based on MGRS coordinates',
      'Validated different user access levels for created accounts',
      'Tested encoding and display of various data types',
      'Validated audit log accuracy for all user actions and system events',
    ],
    tags: ['Web', 'GIS', 'Security'],
  },
  {
    id: 4,
    image: card4,
    category: 'QA Testing',
    title: 'e-Notary',
    description:
      'Web app for digital notarization requests and online consultations with lawyers.',
    testingConducted: [
      'Validated digital notarization request and document upload workflow',
      'Tested lawyer consultation booking and scheduling system',
      'Tested video conferencing for online notarization sessions',
      'Verified secure authentication and document management features',
    ],
    tags: ['Web', 'Video', 'Documents'],
  },
  {
    id: 5,
    image: card5,
    category: 'QA Testing',
    title: 'Project Liwanag',
    description:
      'E-learning platform for teachers to gain knowledge and skills for more efficient teaching.',
    testingConducted: [
      'Validated course enrollment and skill-building module accessibility',
      'Tested content delivery and interactive learning assessment tools',
      'Verified teacher progress tracking and performance reporting',
      "Tested compatibility across browsers and devices",
    ],
    tags: ['Web', 'E-learning', 'Responsive'],
  },
  {
    id: 6,
    image: card6,
    category: 'QA Testing',
    title: 'IRIS',
    description:
      'Digital Signage Content Management System for managing and displaying content on signage.',
    testingConducted: [
      'Validated digital content upload, scheduling, and display rendering',
      'Tested multi-screen signage management and content synchronization',
      'Verified organization-wide distribution and role-based access control',
      'Tested looping of digital content on signage displays',
      'Tested zone-based content management for targeted display',
    ],
    tags: ['Web', 'CMS', 'Multi-screen'],
  },
];

export const experience = [
  {
    role: 'Quality Assurance Analyst',
    company: 'Teøchnologies Inc., Pasay',
    period: 'August 2024 — Present',
    points: [
      'Create and maintain test cases and test scripts for full application coverage.',
      'Design and execute manual test scripts to validate functionality, performance, and reliability.',
      'Perform smoke, end-to-end functional, regression, and retesting for stable releases.',
      'Support release planning and coordinated testing for on-time deployments.',
      'Lead continuous improvements in QA processes to increase team efficiency.',
    ],
  },
  {
    role: 'Quality Assurance Intern',
    company: 'Paidesk Services OPC, Bulacan',
    period: 'March 2024 — May 2024',
    points: [
      'Analyzed Jira tickets and tested based on requirements.',
      'Executed test cases and documented test results.',
      'Identified and documented issues encountered during testing.',
      'Reported issues to QA Lead and the rest of the QA team.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Pambayang Dalubhasaan ng Marilao, Bulacan',
    period: 'Batch 2024',
    detail: 'Learned and applied various methodologies used in the IT industry.',
  },
  {
    degree: 'ICT — IT in Mobile App & Web Development',
    school: 'STI College, Meycauayan, Bulacan',
    period: 'Batch 2018',
    detail: 'Learned basic methods in developing web and mobile applications.',
  },
];

export const certifications = [
  { id: 1, image: cert1, date: '02 Jun, 2025', title: 'Introduction to Software Testing', link: 'https://drive.google.com/file/d/1YHBD2ZeYQjS2YyxxtXHMdJ1XKtJ9EqiX/view?usp=sharing' },
  { id: 2, image: cert2, date: '09 Oct, 2025', title: 'Software Testing with Generative AI', link: 'https://drive.google.com/file/d/10Qp3MPPV0onI8IN6ajhivDtS118fvyOD/view?usp=sharing' },
  { id: 3, image: cert3, date: '08 Oct, 2025', title: 'Introduction to Generative AI (Google & Simplilearn)', link: 'https://drive.google.com/file/d/1rR3lEgiWRNyZ9mPsSuEFyQeBrbsuBkFw/view?usp=sharing' },
  { id: 4, image: cert4, date: '08 Oct, 2025', title: 'Introduction to Prompt Engineering (Simplilearn)', link: 'https://drive.google.com/file/d/16qZ03I4p1hCQmCcF8P0R5PCNl7ydc0L_/view?usp=sharing' },
  { id: 5, image: cert5, date: '03 Jun, 2025', title: 'Project Management 101 (Simplilearn)', link: 'https://drive.google.com/file/d/1rt-t_2epXlkvQ64U0lfJq84Rigajbiju/view?usp=sharing' },
  { id: 6, image: cert6, date: '03 Dec, 2021', title: 'National Cyber Drill 2021 (CERT-PH) — Day 1', link: 'https://drive.google.com/file/d/1qBYta-UDJlIfmSkJgp34tcVqtk1cDkQ7/view?usp=sharing' },
  { id: 7, image: cert7, date: '03 Dec, 2021', title: 'National Cyber Drill 2021 (CERT-PH) — Day 2', link: 'https://drive.google.com/file/d/1hxLdjVdsdR9Ahv4aRl3pfN6yVfwb2ZvD/view?usp=sharing' },
];

export const companies = [
  { name: 'Paidesk Services OPC', src: paideskLogo, alt: 'Paidesk Logo' },
  { name: 'Teøchnologies Inc.', src: teoLogo, alt: 'Teøchnologies Logo' },
];
