import {
  CSSLogoIcon,
  HTMLLogoIcon,
  JavascriptLogoIcon,
  NextJSLogoIcon,
  PrismaLogoIcon,
  ReactLogoIcon,
  TailwindLogoIcon,
  TypescriptLogoIcon,
} from '../../components/BrandIcons'

type AboutProps = {
  language: 'en-US' | 'pt-BR'
}

export function About({ language }: AboutProps) {
  function getAge(dateString: string) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const currentAge = getAge('July 24, 1999 09:20:01')

  // if (language === 'en-US') {
  //   return <English currentAge={currentAge} />
  // }

  // return <Portuguese currentAge={currentAge} />

  return (
    <>
      <div className="flex h-full flex-col gap-2">
        <h1 className="md:mb-0 sm-h:mb-0">
          {
            {
              'pt-BR': 'Sobre mim',
              'en-US': 'About me',
            }[language]
          }
        </h1>
        <div className=" flex flex-col gap-4 overflow-hidden">
          <div className="flex flex-col gap-4">
            <p>
              {
                {
                  'pt-BR': `Olá! Meu nome é Gabriel, tenho ${currentAge} anos e sou apaixonado
                por desenvolvimento front-end.`,
                  'en-US': `Hello! My name is Gabriel, I'm ${currentAge} and I'm
                  passionate about front-end development.`,
                }[language]
              }
            </p>

            <p>
              {
                {
                  'pt-BR': `Conheci esta área no fim de 2019 por um amigo, e por
                  aproximadamente 2 anos tratei isso como um hobby. Porém no começo
                  de 2021 estou estudando para me tornar um programador
                  profissional, tanto que no fim de 2022 deixei meu trabalho para
                  seguir este sonho.`,
                  'en-US': `I've meet this area late 2019 through a friend but for 2 years
                  I just treated as a hobby. From the beginning of 2021 I've been
                  studying to become a full time developer and at the end of 2022
                  I've quit my job to persue this dream.`,
                }[language]
              }
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-3">
              {
                {
                  'pt-BR': `No futuro pretendo ser um desenvolvedor full-stack, mas no momento
                  estas são astecnologias que já utilizei:`,
                  'en-US': `Ive the intent to become a full-stack developer, but for now this
                  are the technologies I worked with:`,
                }[language]
              }
            </p>

            <div className="mb-3">
              <h4 className="mb-2 text-xl">
                {
                  {
                    'pt-BR': `Tenho experiência`,
                    'en-US': `I have experience`,
                  }[language]
                }
              </h4>
              <ul className="grid grid-cols-2 gap-1">
                <li className="flex items-center gap-2 font-bold">
                  <HTMLLogoIcon size={18} /> HTML
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <CSSLogoIcon size={18} /> CSS
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <JavascriptLogoIcon size={18} /> Javascript
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <TypescriptLogoIcon size={18} /> Typescript
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <ReactLogoIcon size={18} /> React JS
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <NextJSLogoIcon size={18} /> Next JS
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <PrismaLogoIcon color="var(--color-text)" size={18} /> Prisma
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-xl">
                {
                  {
                    'pt-BR': `Estou estudando`,
                    'en-US': `I'm studying`,
                  }[language]
                }
              </h4>
              <ul className="flex flex-col gap-1">
                <li className="flex items-center gap-2 font-bold">
                  <ReactLogoIcon size={18} />
                  React Native
                </li>
                <li className="flex items-center gap-2 font-bold">
                  <TailwindLogoIcon size={18} />
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
