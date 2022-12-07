import React from 'react'
import Header from '../header'
import leftBg from '../../assets/top-left.png'
import Footer from '../footer'

const HomeLayout = ({ children }) => {
  return (
    <div className='relative'>
      <img
        src={leftBg}
        alt='background'
        className='pointer-events-none absolute -top-1 h-24 md:h-48 left-0 -z-10'
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
