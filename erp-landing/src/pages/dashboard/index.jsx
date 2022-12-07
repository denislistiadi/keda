import React from 'react'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='h-screen w-screen flex items-center justify-center text-3xl font-bold'>
      {user.username == 'basic'
        ? 'Dashboard Basic User'
        : user.username == 'business'
        ? 'Dashboard Business User'
        : 'Dashboard Entrepreneur User'}
    </div>
  )
}

export default Dashboard
