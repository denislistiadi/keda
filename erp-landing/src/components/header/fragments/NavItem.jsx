import React from 'react'

const NavItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer  hidden md:block relative no-underline
    after:content-[''] after:absolute after:w-full hover:text-blue-400 after:h-0.5 after:-bottom-1 after:left-0 
    after:bg-blue-400 after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 after:scale-x-0 
    hover:after:scale-x-100 hover:after:origin-bottom-left
`}
    >
      {children}
    </li>
  )
}

export default NavItem
