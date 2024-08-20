'use client'

import {useThemeConfig} from '@/lib/theme-context'
import {CheckIcon} from '@heroicons/react/24/outline'

export function ThemeToggle(): JSX.Element {
  const colors = ['blue', 'violet', 'pink', 'green', 'cyan']
  const {themeConfig, setThemeConfig} = useThemeConfig()

  const toggleColor = (color: string) => {
    setThemeConfig({...themeConfig, color})
  }

  return (
    <div className="flex gap-6 pt-6">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col">
          <button
            className={`border-main-400 size-10 rounded-full border-0 bg-${color}-500 flex items-center justify-center shadow-lg shadow-${color}-200 dark:shadow`}
            onClick={() => toggleColor(color)}
          >
            {themeConfig.color === color && <CheckIcon className="size-5 text-white" />}
          </button>
          <span className="mt-3 capitalize">{color}</span>
        </div>
      ))}
    </div>
  )
}
