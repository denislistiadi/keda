import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import About from './components/About'
import FirstView from './components/FirstView'
import Pricing from './components/Pricing'

const Home = () => {
  return (
    <Layout>
      <Header />
      <FirstView />
      <About />
      <Pricing />
    </Layout>
  )
}

export default Home
