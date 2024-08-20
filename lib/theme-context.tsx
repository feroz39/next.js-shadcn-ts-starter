'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {generateHtmlClassNames} from './theme-utils'

interface ThemeConfigContextProps {
  themeConfig: any
  setThemeConfig: (newConfig: any) => void
}

const ThemeConfigContext = createContext<ThemeConfigContextProps | undefined>(undefined)

interface ThemeConfigProviderProps {
  children: ReactNode
  initialConfig: any
}

export const ThemeConfigProvider = ({children, initialConfig}: ThemeConfigProviderProps) => {
  const [themeConfig, setThemeConfig] = useState(initialConfig)

  useEffect(() => {
    document.documentElement.className = generateHtmlClassNames(themeConfig)
  }, [themeConfig])

  const updateThemeConfig = (newConfig: any) => {
    setThemeConfig(newConfig)
    document.cookie = `themeConfig=${JSON.stringify(newConfig)}; path=/;`
  }

  return <ThemeConfigContext.Provider value={{themeConfig, setThemeConfig: updateThemeConfig}}>{children}</ThemeConfigContext.Provider>
}

export const useThemeConfig = () => {
  const context = useContext(ThemeConfigContext)
  if (!context) {
    throw new Error('useThemeConfig must be used within a ThemeConfigProvider')
  }
  return context
}
