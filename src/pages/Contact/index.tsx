import { English } from './TranslatedPages/English'
import { Portuguese } from './TranslatedPages/Portuguese'

type ContactProps = {
  language: 'en-US' | 'pt-BR'
}

export function Contact({ language }: ContactProps) {
  console.log(language)
  if (language === 'en-US') {
    return <English />
  }

  return <Portuguese />
}
