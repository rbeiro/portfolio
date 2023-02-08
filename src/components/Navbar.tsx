import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { At, PaintBrush, User } from 'phosphor-react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { useLocalStorage } from '../utils/hooks/useLocalStorage'
import { BrazilFlag, USAFlag } from './BrandIcons'

type SetValue<T> = Dispatch<SetStateAction<T>>

type NavbarProps = {
  currentPage: JSX.Element
  currentLanguage: 'pt-BR' | 'en-US'
  currentTheme: 'dark' | 'light'
  changeCurrentPage: (element: JSX.Element) => void
  changeCurrentLanguage: SetValue<'pt-BR' | 'en-US'>
  changeCurrentTheme: SetValue<'dark' | 'light'>
}

export function Navbar({
  currentPage,
  changeCurrentPage,
  currentLanguage,
  changeCurrentLanguage,
  currentTheme,
  changeCurrentTheme,
}: NavbarProps) {
  useEffect(() => {
    switch (currentPage.type.name) {
      case 'About':
        changeCurrentPage(<About language={currentLanguage} />)
        break
      case 'Contact':
        changeCurrentPage(<Contact language={currentLanguage} />)
        break
      case 'Projects':
        changeCurrentPage(<Projects language={currentLanguage} />)
        break
      default:
    }
  }, [currentLanguage, changeCurrentPage, currentPage.type.name])

  function handlePageSelection(pageElement: JSX.Element) {
    if (currentPage.type.name === pageElement.type.name) return

    changeCurrentPage(pageElement)
  }

  function handleThemeToggle() {
    const isCurrentLightTheme = document.body.classList.contains('light-theme')
    if (isCurrentLightTheme) {
      document.body.classList.remove('light-theme')
      changeCurrentTheme('dark')
      return
    }

    document.body.classList.add('light-theme')
    changeCurrentTheme('light')
  }

  function handleLanguageToggle() {
    if (currentLanguage === 'pt-BR') {
      changeCurrentLanguage('en-US')
    }

    if (currentLanguage === 'en-US') {
      changeCurrentLanguage('pt-BR')
    }
  }

  return (
    <nav className="my-3 mx-0 flex h-max flex-col gap-4 sm:flex-row sm:justify-between sm:gap-2">
      <div className="min-w-[84px] rounded-md bg-appBackground1 p-3 sm:flex sm:h-[74px] sm:w-full sm:min-w-[74px] sm:justify-around sm:gap-2">
        <div
          className="
					flex aspect-square h-full cursor-pointer select-none flex-col items-center 
					justify-center 
					gap-1 
					rounded-md 
					p-2 
					leading-none
					transition-all duration-150 ease-basic-transition
					hover:bg-appBackground2
					"
          onClick={() => {
            handlePageSelection(<About language={currentLanguage} />)
          }}
        >
          <User size={20} fontWeight="bold" />
          <span className="text-xs leading-relaxed sm:text-[10px]">
            {
              {
                'pt-BR': 'sobre',
                'en-US': 'about',
                'ge-GE': 'über',
              }[currentLanguage]
            }
          </span>
        </div>
        <div
          className="
					flex aspect-square h-full cursor-pointer select-none flex-col items-center 
					justify-center 
					gap-1 
					rounded-md 
					p-2 
					leading-none
					transition-all duration-150 ease-basic-transition
					hover:bg-appBackground2
					"
          onClick={() => {
            handlePageSelection(<Projects language={currentLanguage} />)
          }}
        >
          <PaintBrush size={20} fontWeight="bold" />
          <span className="text-xs leading-relaxed sm:text-[10px]">
            {
              {
                'pt-BR': 'projetos',
                'en-US': 'projects',
              }[currentLanguage]
            }
          </span>
        </div>
        <div
          className="
					flex aspect-square h-full cursor-pointer select-none flex-col items-center 
					justify-center 
					gap-1 
					rounded-md 
					p-2 
					leading-none
					transition-all duration-150 ease-basic-transition
					hover:bg-appBackground2
					"
          onClick={() => {
            handlePageSelection(<Contact language={currentLanguage} />)
          }}
        >
          <At size={20} fontWeight="bold" />
          <span className="text-xs leading-relaxed sm:text-[10px]">
            {
              {
                'pt-BR': 'contato',
                'en-US': 'contact',
              }[currentLanguage]
            }
          </span>
        </div>
      </div>

      <div className="min-w-[84px] rounded-md bg-appBackground1 p-3 sm:h-[74px] sm:min-w-[74px]">
        <div
          className="
					flex aspect-square h-full cursor-pointer select-none flex-col items-center 
					justify-center 
					gap-1 
					rounded-md 
					p-2 
					leading-none
					transition-all duration-150 ease-basic-transition
					hover:bg-appBackground2
					"
          onClick={() => {
            handleThemeToggle()
          }}
        >
          {currentTheme === 'dark' ? (
            <MoonIcon fontWeight="bold" />
          ) : (
            <SunIcon fontWeight="bold" />
          )}
          <span className="text-xs leading-relaxed sm:text-[10px]">
            {
              {
                'pt-BR': 'tema',
                'en-US': 'theme',
              }[currentLanguage]
            }
          </span>
        </div>
      </div>
      <div className="min-w-[84px] rounded-md bg-appBackground1 p-3 sm:h-[74px] sm:min-w-[74px]">
        <div
          className="
					flex aspect-square h-full cursor-pointer select-none flex-col items-center 
					justify-center 
					gap-1 
					rounded-md 
					p-2 
					leading-none
					transition-all duration-150 ease-basic-transition
					hover:bg-appBackground2
					"
          onClick={() => {
            handleLanguageToggle()
          }}
        >
          <div className="text-xl">
            {
              {
                'pt-BR': <BrazilFlag />,
                'en-US': <USAFlag />,
              }[currentLanguage]
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
