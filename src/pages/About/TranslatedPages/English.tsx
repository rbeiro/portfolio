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

interface EnglishPageProps {
  currentAge: number
}

export function English({ currentAge }: EnglishPageProps) {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="mb-4 md:mb-0 sm-h:mb-0">About</h1>
          <p>
            Hello! My name is Gabriel, I&apos;m {currentAge} and I&apos;m
            passionate about front-end development.
          </p>

          <p>
            I&apos;ve meet this area late 2019 through a friend but for 2 years
            I just treated as a hobby. From the beginning of 2021 I&apos;ve been
            studying to become a full time developer and at the end of 2022
            I&apos;ve quit my job to persue this dream.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span>
            Ive the intent to become a full-stack developer, but for now this
            are the technologies I worked with:
          </span>

          <div className="mb-3">
            <h4 className="mb-2 text-xl">I have experience</h4>
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
            <h4 className="mb-2 text-xl">I&apos;m studying</h4>
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
    </>
  )
}
