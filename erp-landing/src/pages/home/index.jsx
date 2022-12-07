import React from 'react'
import HomeLayout from '../../components/layout/HomeLayout'
import About from './components/About'
import Contact from './components/Contact'
import FirstView from './components/FirstView'
import Pricing from './components/Pricing'

const Home = () => {
  return (
    <HomeLayout>
      <FirstView />
      <About />
      <Pricing />
      <Contact />
    </HomeLayout>
  )
}

export default Home
