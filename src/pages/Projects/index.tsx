import { useEffect, useRef, useState } from 'react'

import { ProjectPreview } from './components/ProjectPreview'
import { projects } from './projects'
import { Project } from '../../types'

type ProjectsProps = {
  language: 'en-US' | 'pt-BR'
}

export function Projects({ language }: ProjectsProps) {
  const [isScrollNecessary, setIsScrollNecessary] = useState(false)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const projectPageRef = useRef<HTMLDivElement>(null)

  const leftSideProjects: Project[] = []
  const rightSideProjects: Project[] = []

  projects.forEach((project, index) => {
    if ((index + 1) % 2 === 0) {
      rightSideProjects.push(project)
      return
    }
    leftSideProjects.push(project)
  })

  useEffect(() => {
    if (projectPageRef === null) return
    if (projectsContainerRef === null) return

    const pageHeight = projectPageRef.current!.clientHeight - 65
    const projectsContainerHeight = projectsContainerRef.current!.clientHeight

    if (projectsContainerHeight > pageHeight) {
      setIsScrollNecessary(true)
    }
    if (projectsContainerHeight < pageHeight) {
      setIsScrollNecessary(false)
    }
  }, [])
  console.log(language)
  // if (language === 'en-US') {
  //   return <English language={language} />
  // }

  // return <Portuguese language={language} />

  return (
    <div className="flex h-full flex-col gap-4" ref={projectPageRef}>
      <h1>Projetos</h1>
      <div
        className={`flex gap-4 sm:flex-col sm:items-center md:flex-col md:items-center lg:flex-col lg:items-center ${
          isScrollNecessary ? 'overflow-y-scroll' : 'overflow-hidden'
        }`}
        ref={projectsContainerRef}
      >
        <div className="flex w-[calc(50%-0.5rem)] flex-col gap-4 sm:w-[90%] md:w-[80%] lg:w-[70%]">
          {leftSideProjects.length > 0 &&
            leftSideProjects.map((project) => {
              return (
                <ProjectPreview
                  key={project.githubRepoName}
                  title={project.title}
                  description={project.excerpt}
                  githubRepoName={project.githubRepoName}
                  technologies={project.usedTechTags}
                  previewImage={project.previewImage}
                  demonstrationLink="#"
                  language={language}
                />
              )
            })}
        </div>
        <div className="flex w-[calc(50%-0.5rem)] flex-col gap-4 sm:w-[90%] md:w-[80%] lg:w-[70%]">
          {rightSideProjects.length > 0 &&
            rightSideProjects.map((project) => {
              return (
                <ProjectPreview
                  key={project.githubRepoName}
                  title={project.title}
                  description={project.excerpt}
                  githubRepoName={project.githubRepoName}
                  technologies={project.usedTechTags}
                  previewImage={project.previewImage}
                  language={language}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
