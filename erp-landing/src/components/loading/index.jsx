import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <AiOutlineLoading3Quarters className='text-blue-500 w-12 h-12 animate-spin' />
    </div>
  )
}

export default Loading
