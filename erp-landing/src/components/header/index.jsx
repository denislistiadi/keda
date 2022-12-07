import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NavItem from './fragments/NavItem'

const Header = () => {
  const navigate = useNavigate()
  const param = useLocation()

  const scrollSelectedItem = (id) => {
    const el = document.getElementById(id)
    el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <header className='py-4 px-5 md:px-24 md:py-10 flex justify-between items-center'>
      <Link to='/'>
        <h1 className='font-extrabold text-base md:text-3xl cursor-pointer text-white'>ERP NAME</h1>
      </Link>
      <div className='flex gap-12 items-center'>
        {param.pathname !== '/login' && (
          <React.Fragment>
            <ul className='md:flex justify-between hidden gap-6 font-bold'>
              <NavItem onClick={() => scrollSelectedItem('about')}>ABOUT</NavItem>
              <NavItem onClick={() => scrollSelectedItem('pricing')}>PRICING</NavItem>
              <NavItem onClick={() => scrollSelectedItem('contact')}>CONTACT</NavItem>
            </ul>
            <button
              onClick={() => navigate('/login')}
              className='px-8 md:px-10 py-2 rounded-lg border text-blue-500 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-500 text-sm md:text-base font-semibold'
            >
              LOGIN
            </button>
          </React.Fragment>
        )}
      </div>
    </header>
  )
}

export default Header
