"use client"

import Image from 'next/image'
import {  HashIcon } from 'lucide-react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer";

export function ProjectCard({ project, titleAs, showSnippet, noBorder, isProjectsTab }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements, showSnippet?: boolean, noBorder?: boolean, isProjectsTab?: boolean }) {
  const utmLink = `https://${project.link.href}?utm_source=${utm_source}`
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className={`relative flex flex-col justify-between h-full w-full p-4 rounded-2xl transition-all ${isProjectsTab ? '' : 'group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5'} ${noBorder ? '' : 'border border-muted-foreground/20 shadow-sm'}`}>
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              {project.logo ? (
                <Image src={project.logo} alt={`${project.name} logo`} width={42} height={42} className="rounded object-contain" />
              ) : (
                <Favicon url={project.link.href} />
              )}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
          {showSnippet && project.snippet && (
            <div className="relative z-10 mt-2 ml-2">
              <Image src={project.snippet} alt={`${project.name} snippet`} width={300} height={200} className="rounded object-contain" />
            </div>
          )}
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='absolute top-4 right-4 z-20'>
          <Link
            href={utmLink}
            target='_blank'
            rel='noopener noreferrer'
            className='group-hover:text-primary group-hover:cursor-pointer'>
            <ArrowUpRight size={32} weight="duotone" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </li>
  )
}