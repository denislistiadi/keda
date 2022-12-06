import React from 'react'
import leftBg from '../../assets/top-left.png'

const Layout = ({ children }) => {
  return <div className='relative'>
    <img src={leftBg} alt="background" className='pointer-events-none absolute -top-1 h-24 md:h-48 left-0 -z-10' />{children}</div>
}

export default Layout
