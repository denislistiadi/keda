import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InputSection from '../../components/input/InputSection'
import LoginLayout from '../../components/layout/LoginLayout'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const handleSubmit = () => {
    if (username !== 'basic' && username !== 'business' && username !== 'entrepreneur')
      return setErrorName(true)
    if (password !== '1234') return setErrorPass(true)
    localStorage.setItem('user', JSON.stringify({ username: username, password: password }))
    navigate('/dashboard')
  }

  useEffect(() => {
    setErrorName(false)
    setErrorPass(false)
  }, [username, password])
  return (
    <LoginLayout>
      <div className='grid md:grid-cols-3 px-5 md:px-24 py-10'>
        <div className='lg:col-span-2 hidden md:block'></div>
        <div className='md:col-span-2 lg:col-span-1 border rounded p-5 flex flex-col gap-3'>
          <h4 className='text-center text-2xl font-semibold'>Login Akun</h4>
          <InputSection
            placeholder='Username'
            className='focus:border-blue-500'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errorName}
            errorMessage='Username yang anda masukkan salah'
          />
          <InputSection
            type='password'
            placeholder='Password'
            className='focus:border-blue-500'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorPass}
            errorMessage='Password yang anda masukkan salah'
          />
          <p className='text-end text-xs text-gray-400'>
            Lupa Password? <span className='text-blue-500 cursor-pointer'>Klik Disini</span>
          </p>
          <button
            onClick={handleSubmit}
            disabled={!username || !password ? true : false}
            data-testid='login'
            className='bg-blue-500 disabled:bg-gray-300 text-white font-semibold text-lg py-2 rounded-lg my-2'
          >
            LOGIN
          </button>
          <hr />
          <p className='text-center text-sm text-gray-400'>Belum punya akun?</p>
          <button
            onClick={() => undefined}
            className='font-semibold text-lg py-2 rounded-lg my-2 border border-blue-500 text-blue-500'
          >
            REGISTER
          </button>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login
