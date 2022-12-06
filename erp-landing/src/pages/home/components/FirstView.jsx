import React from 'react'
import illustration from '../../../assets/icon.svg'
import icon from '../../../assets/bg-right.png'

const FirstView = () => {
  return (
    <section className='flex px-5 md:px-24 flex-col md:gap-10'>
      <div className='flex flex-col gap-2 md:gap-5 mt-8 md:mt-16 mr-0 md:items-end ml-auto w-full md:w-4/6'>
        <h2 className='text-xl md:text-5xl font-bold md:text-end'>
          ERP Software For Small And Big Business
        </h2>
        <p className='text-sm md:text-end md:w-4/5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur.
        </p>
      </div>
      <div className='flex justify-between relative'>
        <div className='flex flex-1 mt-4 flex-col gap-3 justify-center'>
          <p className='md:w-4/6 text-sm md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <img
            src={illustration}
            alt='illustrasi'
            className='w-4/6 max-w-xs md:max-w-none mx-auto md:mx-0 md:w-64 lg:w-80 lg:h-80 h-4/6 md:h-64 '
          />
        </div>
        <div className='absolute -right-24 bottom-0 hidden md:block w-4/6 max-w-2xl'>
          <img
            src={icon}
            alt='background'
            className=' pointer-events-none '
          />
        </div>
      </div>
    </section>
  )
}

export default FirstView
