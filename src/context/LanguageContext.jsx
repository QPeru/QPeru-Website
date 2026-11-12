import { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../i18n/content'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'qperu-lang'

// Idiomas disponibles en el selector del navbar.
// "qu" (quechua) todavía no tiene traducción: hasta que se agregue
// "qu" en src/i18n/content.js, se muestra el contenido en español.
export const LANGS = ['es', 'en', 'qu']

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGS.includes(saved) ? saved : 'es'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] || content.es }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
