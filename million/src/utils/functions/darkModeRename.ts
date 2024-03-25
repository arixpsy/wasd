export const setDarkMode = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const enableDarkMode = () => {
  localStorage.theme = 'dark'
  setDarkMode()
}

export const disableDarkMode = () => {
  localStorage.theme = 'light'
  setDarkMode()
}

export const resetTheme = () => {
  localStorage.removeItem('theme')
  setDarkMode()
}

export const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
}
