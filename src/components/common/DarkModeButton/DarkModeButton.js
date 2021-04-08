import React from 'react'

export default function DarkModeButton() {
  const toggleDarkMode = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light");
      let theme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", theme);
    } else {
      document.body.classList.toggle("dark");
      let theme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }
  }
  return <button tabIndex="-1" onClick={toggleDarkMode}>Switch</button>
}
