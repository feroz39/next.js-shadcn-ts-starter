import clsx from 'clsx'

export const generateHtmlClassNames = (themeConfig: {color: String; theme: String}) => {
  return clsx(
    `theme-${themeConfig.color}`,
    `${themeConfig.theme}`,
    'scrollbar-thumb-primary-200',
    'scrollbar-thumb-rounded-full',
    'scrollbar-w-2',
    'hover:scrollbar-thumb-primary-400',
    'dark:scrollbar-thumb-main-500',
    'hover:dark:scrollbar-thumb-primary-800'
  )
}
