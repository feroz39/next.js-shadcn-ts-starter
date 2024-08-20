'use client'

import {useThemeConfig} from '@/lib/theme-context'

import {MoonIcon, SunIcon} from '@heroicons/react/24/outline'

export function ModeToggle() {
  const {themeConfig, setThemeConfig} = useThemeConfig()

  const toggleTheme = () => {
    const newTheme = themeConfig.theme === 'light' ? 'dark' : 'light'
    setThemeConfig({...themeConfig, theme: newTheme})
  }

  return (
    <button
      className="hover:bg-primary-50 focus-visible:bg-main-100 focus-visible:text-primary-800 hover:dark:bg-primary-600/20 focus-visible:dark:bg-main-400 relative flex size-9 items-center justify-center rounded focus-visible:outline-0"
      onClick={toggleTheme}
    >
      {themeConfig.theme == 'dark' ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
    </button>
  )
}
