import React from 'react'

const TextArea = ({placeholder}) => {
  return (
    <textarea
      type='text'
      placeholder={placeholder}
      className='p-2 text-sm border transition-all duration-300 text-black bg-white h-24 resize-none rounded-md outline-none focus:border-white'
    />
  )
}

export default TextArea
