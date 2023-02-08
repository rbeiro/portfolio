// eslint-disable-next-line
import { useEffect, useMemo, useRef, useState } from "react";
import { extractLinesFromTextNode } from '../../../utils/extractLinesFromTextNode'
import { formatCollapsedText } from '../../../utils/formatCollapsedText'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

type ProjectPreviewProps = {
  title: string | { 'pt-BR': string; 'en-US': string }
  previewImage: string
  description: { 'pt-BR': string; 'en-US': string }
  demonstrationLink?: string
  githubRepoName: string
  technologies: string[]
  language: 'en-US' | 'pt-BR'
}

export function ProjectPreview({
  title,
  demonstrationLink,
  previewImage,
  description,
  githubRepoName,
  technologies,
  language,
}: ProjectPreviewProps) {
  const [descriptionTextNodeLines, setDescriptionTextNodeLines] = useState<
    string[]
  >([])
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true)

  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (descriptionRef.current === null) return
    if (descriptionRef.current.firstChild === undefined) return
    if (descriptionRef.current.firstChild === null) return
    if (descriptionRef.current.firstChild.textContent === undefined) return

    const descriptionTextNode = descriptionRef.current.firstChild

    const lines = extractLinesFromTextNode(descriptionTextNode)
    if (lines.length > 2) {
      const collapsedText = formatCollapsedText(lines, 2)

      descriptionRef.current!.firstChild!.textContent = collapsedText + '...'
      setDescriptionTextNodeLines(lines)
    }
  }, [language])

  function toggleReadMore() {
    if (isDescriptionCollapsed) {
      descriptionRef.current!.firstChild!.textContent = description[language]
      setIsDescriptionCollapsed(!isDescriptionCollapsed)
      return
    }

    const collapsedText = formatCollapsedText(descriptionTextNodeLines, 2)
    if (collapsedText)
      descriptionRef.current!.firstChild!.textContent = collapsedText + '...'
    setIsDescriptionCollapsed(!isDescriptionCollapsed)
  }

  return (
    <div className="flex h-max w-full flex-col gap-3 rounded-md bg-accent6 p-4">
      <h3 className="capitalize ">
        {typeof title === 'string' ? title : title[language]}
      </h3>
      <div className="aspect-video w-full self-center overflow-hidden rounded-md ">
        <img className="object-contain" src={previewImage} alt="" />
      </div>

      <ul className="flex flex-wrap justify-center gap-1">
        {technologies.map((techName) => {
          return (
            <li
              className="
              pointer-events-none flex h-6 select-none
              list-none items-center justify-center rounded-full
              bg-[#F1E9C9] py-0 
              px-2 text-xs
              font-bold uppercase
              leading-[0] text-[#C47F17]
              "
              key={`${techName} ${title}`}
            >
              {techName}
            </li>
          )
        })}
      </ul>

      <div>
        <p className="text-center text-sm" ref={descriptionRef}>
          {description[language]}
        </p>

        {descriptionTextNodeLines.length > 0 ? (
          isDescriptionCollapsed ? (
            <button
              onClick={toggleReadMore}
              className="
              block 
              cursor-pointer 
              text-sm opacity-70 transition-all
              duration-150
              ease-basic-transition
              hover:underline
              "
            >
              {{ 'pt-BR': 'Ler mais', 'en-US': 'Read more' }[language]}
            </button>
          ) : (
            <button
              onClick={toggleReadMore}
              className="
              block 
              cursor-pointer 
              text-sm opacity-70 transition-all
              duration-150
              ease-basic-transition
              hover:underline
              "
            >
              {{ 'pt-BR': 'Mostrar menos', 'en-US': 'Show less' }[language]}
            </button>
          )
        ) : (
          ''
        )}
      </div>

      <div className="grid grid-cols-[max-content_max-content] justify-between">
        {demonstrationLink ? (
          <a
            href={demonstrationLink}
            className="
        flex items-center
          gap-1.5 rounded-md
          bg-[#C47F17]
          py-1 px-2 text-[#F1E9C9]
          "
          >
            Live demo
          </a>
        ) : (
          <span></span>
        )}
        <a
          href={`https://github.com/rbeiro/${githubRepoName}`}
          target="_blank"
          rel="noreferrer"
          className="
          flex items-center
          gap-1.5 rounded-md
          bg-[#C47F17]
          py-1 px-2 text-[#F1E9C9]
          "
        >
          {
            {
              'pt-BR': 'Código',
              'en-US': 'Code',
            }[language]
          }{' '}
          <GitHubLogoIcon />
        </a>
      </div>
    </div>
  )
}
