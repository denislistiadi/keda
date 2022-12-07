import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from './components/loading'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/dashboard'

const Home = React.lazy(() => import('./pages/home'))
const Login = React.lazy(() => import('./pages/login'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
