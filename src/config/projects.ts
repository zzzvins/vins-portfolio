// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro =
  "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
  snippet?: string
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'APProob',
    description:
      'Managing student clearance applications, allowing students to submit, track approvals from advisers and clearance officers, and receive a PDF once cleared.',
    link: { href: 'github.com/zzzvins/APProob', label: 'APProob' },
    logo: '/images/icon/approob.ico',
    category: ['Repository'],
    snippet: 'images/projects/approob.png',
    // techStack: ['Node.js', 'TailwindCSS', 'MongoDB'],
    // tags: ['Approve&Return', 'Clearance Applications'],
  },
  {
    name: 'KeyType',
    description:
      'Multiplayer typing game where players race to type text quickly and accurately, with the highest scorer winning.',
    link: { href: 'github.com/zzzvins/typing-game', label: 'KeyTypeGrandPrix' },
    logo: '/images/icon/keytype.png',
    category: ['Repository'],
    snippet: 'images/projects/keytype.png',
    // techStack: [''],
    // tags: [''],
  },
  {
    name: 'OHMS Mobile',
    description:
      'Tracking and managing the health status of students, admins, and entrance monitors, identifying COVID-19 symptoms and other health issues to ensure safety and well-being.',
    link: {
      href: 'github.com/zzzvins/health-monitoring-system',
      label: 'OHMS Mobile',
    },
    logo: '/images/icon/ohms_mobile.png',
    category: ['Repository'],
    snippet: 'images/projects/ohmsmobile.png',
    // techStack: [''],
    // tags: [''],
  },
]

// export const githubProjects: Array<ProjectItemType> = []
