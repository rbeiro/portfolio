import { Project } from '../../types'
import FlashableCoverImage from '../../../public/home-page.png'
import PortifolioCoverImage from '../../../public//this-portifolio.png'

export const projects: Project[] = [
  {
    title: 'Flashable',
    githubRepoName: 'flashable',
    previewImage: FlashableCoverImage,
    excerpt: {
      'pt-BR':
        'Você pode criar seu conjunto de flashcards customizados. Eu criei este projeto para estudar alguns dos novos recursos introduzidos no Next.js 13.',
      'en-US':
        "You can create your own set of custom flashcards. I've created this project to study some of the new features introduced in Next.js 13.",
    },
    usedTechTags: [
      'Next.js',
      'Supabase',
      'Radix UI',
      'Typescript',
      'Sass',
      'Zod',
      'Zustand',
    ],
    createdAt: '03/12/2022',
  },
  {
    title: {
      'pt-BR': 'Este portifólio',
      'en-US': 'This portifolio',
    },
    githubRepoName: 'flashable',
    previewImage: PortifolioCoverImage,
    excerpt: {
      'pt-BR': 'Este portifólio... não há muito o que explicar.',
      'en-US': "This portifolio... there's not much to explain.",
    },
    usedTechTags: ['React.js', 'TailwindCSS', 'Vite', 'Typescript'],
    createdAt: '05/01/2023',
  },
]
