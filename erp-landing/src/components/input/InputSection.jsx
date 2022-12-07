import React from 'react'

const InputSection = ({ type = 'text', error, errorMessage, placeholder, className, ...rest }) => {
  return (
    <React.Fragment>
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        className={`p-2 text-sm border transition-all duration-300 ${
          className ?? 'focus:border-white'
        } text-black bg-white rounded-md outline-none`}
      />
      {error && <p className='text-[10px] text-red-500'>{errorMessage}</p>}
    </React.Fragment>
  )
}

export default InputSection
