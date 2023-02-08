import {
  CSSLogoIcon,
  HTMLLogoIcon,
  JavascriptLogoIcon,
  NextJSLogoIcon,
  ReactLogoIcon,
  PrismaLogoIcon,
  TypescriptLogoIcon,
  TailwindLogoIcon,
} from '../../../components/BrandIcons'

interface PortuguesePageProps {
  currentAge: number
}

export function Portuguese({ currentAge }: PortuguesePageProps) {
  return (
    <>
      <div className="flex h-full flex-col gap-2">
        <h1 className="md:mb-0 sm-h:mb-0">Sobre mim</h1>
        <div className=" overflow-hidden">
          <div className="flex flex-col gap-4">
            <p>
              Olá! Meu nome é Gabriel, tenho {currentAge} anos e sou apaixonado
              por desenvolvimento front-end.
            </p>

            <p>
              Conheci esta área no fim de 2019 por um amigo, e por
              aproximadamente 2 anos tratei isso como um hobby. Porém no começo
              de 2021 estou estudando para me tornar um programador
              profissional, tanto que no fim de 2022 deixei meu trabalho para
              seguir este sonho.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-3">
              No futuro pretendo ser um desenvolvedor full-stack, mas no momento
              estas são astecnologias que já utilizei:
            </span>

            <div className="mb-3">
              <h4 className="mb-2 text-xl">Tenho experiência:</h4>
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
              <h4 className="mb-2 text-xl">Estou estudando:</h4>
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
