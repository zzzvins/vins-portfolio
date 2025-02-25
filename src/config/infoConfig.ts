export * from './projects'
export * from './education'
export * from './career'


// personal info
export const name = 'Vins'
export const headline = 'Software developer.'
export const introduction =
  'I’m Clark Vince, a software developer based in Philippines. I enjoy coding, creating innovative solutions, and enjoying a good cup of coffee.'
export const email = 'cv.diala22@gmail.com'
export const githubUsername = 'zzzvins'

// about page
export const aboutMeHeadline =
  "I'm Clark Vince Diala, a software developer based in Philippines."
export const aboutParagraphs = [
  'I learned programming in college and wrote my first program in Python when I was 18.',
  'I have a lot of hobbies, such as reading, gaming, listening to music and so on.',
]

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/cvdiala',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/zzzvins',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
