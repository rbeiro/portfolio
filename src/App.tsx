import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { About } from './pages/About'

import { Navbar } from './components/Navbar'
import { useLocalStorage } from './utils/hooks/useLocalStorage'

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [currentTheme, setCurrentTheme] = useLocalStorage<'dark' | 'light'>(
    '@pf-preferred-color-scheme',
    'dark',
  )
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<
    'pt-BR' | 'en-US'
  >('@pf-preferred-language', 'pt-BR')

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.body.classList.remove('light-theme')
    }
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme')
    }

    // callback function to call when event triggers
    const onPageLoad = () => {
      setIsPageLoading(false)
      // do something else
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad, false)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [currentTheme])
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState<JSX.Element>(
    <About language={currentLanguage} />,
  )

  if (isPageLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading...
      </div>
    )
  }
  return (
    <div className="flex h-[100vh] animate-subtle-content-reveal items-center justify-center py-0 px-4 ">
      <div className=" md-h:h[80vh] sm grid h-[70vh] w-full max-w-[1120px] grid-cols-[max-content_1fr] sm:flex sm:h-full sm:flex-auto sm:flex-col-reverse sm-h:h-[90vh] md-h:h-[80vh]">
        <Navbar
          currentPage={currentPage}
          changeCurrentPage={setCurrentPage}
          currentLanguage={currentLanguage}
          changeCurrentLanguage={setCurrentLanguage}
          currentTheme={currentTheme}
          changeCurrentTheme={setCurrentTheme}
        />
        <div className="grid grid-cols-app-grid sm:mt-3 sm:flex sm:flex-1 sm:flex-col md:grid-cols-[1fr_2fr]">
          <header
            className="
          relative
          ml-4
          gap-4
          after:absolute 
          after:right-0 
          after:top-1/2
          after:h-[calc(100%-2rem)] after:w-[2px] after:-translate-y-1/2 
          after:rounded-md
          after:bg-vertical-line
          after:content-['']
          sm:m-0
          sm:after:right-1/2
          sm:after:bottom-0
          sm:after:top-[calc(100%-2px)]
          sm:after:h-[2px]  sm:after:w-[calc(100%-2rem)]  
          sm:after:translate-y-0
          sm:after:translate-x-1/2
          sm:after:bg-horizontal-line
          "
          >
            <div
              className="
            flex h-full flex-col items-center
            justify-center rounded-tl-md rounded-bl-md bg-appBackground1 
            p-4
            sm:rounded-none
            sm:rounded-tr-md
            sm:rounded-tl-md
            "
            >
              <div className="flex flex-col gap-1">
                <h1 className="animate-reveal-from-left opacity-0 animation-delay-[400ms] md:text-center">
                  Gabriel Ribeiro
                </h1>
                <div
                  className="flex animate-reveal-from-left justify-center 
                gap-2 opacity-0 animation-delay-[600ms]"
                >
                  <a
                    className="rounded-md p-2 leading-[0] transition-colors duration-150 ease-basic-transition hover:bg-accent7"
                    href="https://github.com/rbeiro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubLogoIcon />
                  </a>
                  <a
                    className="rounded-md p-2 leading-[0] transition-colors duration-150 ease-basic-transition hover:bg-accent7"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInLogoIcon />
                  </a>
                </div>
              </div>
            </div>
          </header>

          <main
            className="h-[70vh] rounded-tr-md rounded-br-md bg-appBackground1 p-4 sm:flex-auto sm:rounded-none
            sm:rounded-br-md
            sm:rounded-bl-md
            sm-h:h-[90vh]
            md-h:h-[80vh]"
          >
            {currentPage}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
