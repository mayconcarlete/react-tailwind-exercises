import {useState, useEffect} from "react"

export const Ex1 = () => {
  const [ theme,  setTheme ] = useState<string>("light")
  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return <div className="flex h-screen bg-blue-100 dark:bg-black justify-center items-center">
    <button className="bg-green-200 p-2 rounded-full hover:bg-green-100 shadow" onClick={onClick}>Change Theme</button>
  </div>
}