import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/home'))
const Login = React.lazy(() => import('./pages/login'))

function App() {
  return (
    <Suspense fallback='loading...'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
