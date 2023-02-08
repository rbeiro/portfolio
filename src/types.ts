export interface Project {
  title: string | { 'pt-BR': string; 'en-US': string }
  excerpt: {
    'pt-BR': string
    'en-US': string
  }
  previewImage: string
  githubRepoName: string
  usedTechTags: string[]
  createdAt?: string
}
