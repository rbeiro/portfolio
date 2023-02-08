//eslint-disable
const currentTheme = window.localStorage.getItem('@pf-preferred-color-scheme')
const currentLanguage = window.localStorage.getItem('@pf-preferred-language')

console.log("current theme: " + currentTheme)
console.log("current language: " + currentLanguage)

if(!currentLanguage) {
  window.localStorage.setItem('@pf-preferred-language', JSON.stringify(Intl.DateTimeFormat().resolvedOptions().locale))
}

if(!currentTheme) {
  if(window.matchMedia) {
    window.matchMedia('(@pf-preferreds-color-scheme: dark)') 
    ? window.localStorage.setItem('@pf-preferred-color-scheme', JSON.stringify('light')) 
    : window.localStorage.setItem('@pf-preferred-color-scheme', JSON.stringify('dark'))
  }

}

if(currentTheme === "light") {
  const beforeReactLoadingDiv = document.querySelector('.loading')
  beforeReactLoadingDiv.style.background = "#FFF"
  beforeReactLoadingDiv.style.color = "#000"  
}
