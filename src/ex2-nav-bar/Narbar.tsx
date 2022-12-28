import { useState } from "react"

export const NavBar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const onClick = () => {
    setDropdown(!dropdown)
  }


  return <header className="flex bg-red-100 w-full">
    <div className="grid grid-cols-3 w-full p-4">
      <div className="order-3 grid col-span-1 bg-green-100 justify-end pr-4 md:order-1 md:justify-start items-center">Logo</div>
      <div className="order-2 grid col-span-1 bg-yellow-100"><input placeholder="Search" className="flex w-full"></input></div>
      <div className="order-1 md:hidden"><button className="fa-solid fa-bars" onClick={onClick}></button></div>
      <div className={`order-4 md:order-3 md:grid md:flex-row md:items-center md:w-full md:justify-end col-span-1 ${dropdown ? 'grid pt-4' : 'hidden'}`}>
        <nav className="md:flex md:flex-row md:items-center">
          <ul className="md:flex md:flex-row md:items-center">
            <li className="flex md:pr-4 sm:p-2">Home</li>
            <li className="flex md:pr-4 sm:p-2">SignIn</li>
            <li className="flex md:pr-4 sm:p-2">SignUp</li>
          </ul>
      </nav>
  </div>
    </div>
  </header>
}