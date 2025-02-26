import { Container } from '@/components/layout/Container'
// import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import {
  projectHeadLine,
  projectIntro,
  projects,
  techIcons,
} from '@/config/infoConfig'
// import GithubContributions from '@/components/home/GithubCalendar'
import GitHubSnake from '@/components/home/GitHubSnake'
// import { CustomIcon } from '@/components/shared/CustomIcon'
import IconCloud from '@/components/ui/icon-cloud'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight opacity-80 sm:text-3xl">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
            <SocialLinks className="md:mt-24" />
          </div>
          <div className="relative ml-auto flex size-full w-full items-center justify-center overflow-hidden px-20 md:mr-8 md:w-2/3 md:px-0">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          {/* <GithubContributions /> */}
          <GitHubSnake />
        </div>
        <div className="mx-auto flex max-w-xl justify-center space-y-10 lg:max-w-none">
          {/* <Career /> */}
          <Education />
        </div>
        {/* projects */}
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {projectHeadLine}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs="h3" />
            ))}
          </ul>
        </div>

      </Container>
    </>
  )
}
