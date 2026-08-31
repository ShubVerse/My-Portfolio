// Replace image paths, links and placeholder copy with your real project details.
// Fields marked "[Add ...]" are intentional placeholders — nothing here is invented.

export const projects = [
  {
    id: 'project-management-system',
    index: '01',
    name: 'Project Management System',
    tagline: 'Full-stack platform for managing projects, tasks & teams',
    description:
      'A full-stack project management platform designed to manage projects, tasks, users and team workflows.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Project and task creation with status tracking',
      'User and team workflow management',
      'Real-time collaboration and communication',
      'Comprehensive reporting and analytics',
    ],
    caseStudy: {
      problem: '[Describe the problem this project set out to solve]',
      solution:
        'A full-stack platform that centralizes projects, tasks, users and team workflows in one place.',
      role: '[Add your role — e.g. Full-stack developer]',
      outcome: '[Add outcome once available]',
    },
    links: {
      live: '#',
      github: '#',
    },
    image: null, // Add a project screenshot/preview and reference it here
  },
  {
    id: 'brain-brust',
    index: '02',
    name: 'Brain Brust',
    tagline: 'E-learning platform for engaging online learning',
    description:
      'An e-learning website designed to provide an engaging online learning experience.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Structured, engaging online learning experience',
      'User-friendly and responsive interface',
      'Organized educational content',
      'Interactive learning environment',
    ],
    caseStudy: {
      problem: 'Online learning can often feel unstructured and less engaging, making it difficult for learners to stay focused and access educational content effectively.',
      solution: 'Brain Brust is an e-learning website designed to provide a structured, interactive, and user-friendly learning experience. It helps learners access educational content in an organized and engaging way.',
      role: 'Frontend Development — Designed and developed responsive user interfaces, implemented reusable components, and focused on creating a smooth and intuitive user experience across different devices.',
      outcome: 'Developed a responsive and engaging e-learning platform that provides learners with an accessible and organized online learning experience.',
    },
    links: {
      live: '#',
      github: '#',
    },
    image: '/project-previews/Brain SS.png',
  },
]

// Design showcase — replace with real UI shots (dashboard, landing, app, responsive views)
export const designShowcase = [
  { id: 'dashboard-ui', label: 'Dashboard UI', tag: 'design/dashboard', image: null },
  { id: 'landing-ui', label: 'Landing Page UI', tag: 'design/landing', image: null },
  { id: 'webapp-ui', label: 'Web Application UI', tag: 'design/webapp', image: null },
  { id: 'responsive-ui', label: 'Responsive Design', tag: 'design/responsive', image: null },
]
