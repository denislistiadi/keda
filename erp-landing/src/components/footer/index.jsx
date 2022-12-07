import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4 px-5 md:px-24 md:py-10 flex flex-col md:flex-row justify-between gap-2 md:gap-10'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-base md:text-3xl font-extrabold'>ERP NAME</h1>
        <p className='text-xs md:text-sm font-semibold'>
          © 2022 PT. Suka Suka. All Rights Reserved.
        </p>
      </div>
      <div className='flex items-end'>
        <p className='text-xs md:text-sm font-semibold'>
          Hubungi Kami jika memerlukan informasi lebih lanjut di{' '}
          <span className='text-blue-500'>08123456789</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
