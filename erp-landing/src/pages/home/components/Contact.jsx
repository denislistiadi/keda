import React from 'react'
import InputSection from '../../../components/input/InputSection'
import TextArea from '../../../components/input/TextArea'

const Contact = () => {
  return (
    <div className='px-5 md:px-24 py-5 bg-blue-400 md:py-12' id='contact'>
      <h2 className='text-xl md:text-2xl font-bold pb-1 border-b-2 flex w-fit mx-auto text-white border-white'>
        CONTACT
      </h2>
      <div className='grid md:grid-cols-2 gap-10 mt-5 text-white'>
        <div className='flex flex-col gap-3'>
          <h4 className='text-lg font-bold'>How to Find Us</h4>
          <p className='text-sm'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga officia quos provident
            quo doloribus, iure officiis voluptatum nisi voluptates blanditiis molestias, expedita
            possimus inventore corporis sint? Modi, voluptatibus aut. Tempora harum accusantium
            nulla tenetur! Nesciunt voluptatibus eius officiis laudantium a hic. Asperiores
            repudiandae dolore aperiam doloribus officia itaque consequatur tenetur.
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-lg font-bold'>Get in Touch</h4>
          <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-3'>
            <div className='grid md:grid-cols-2 w-full gap-3'>
              <InputSection placeholder='Name' />
              <InputSection placeholder='Email' type='email' />
            </div>
            <TextArea placeholder='Message' />
            <button
              type='submit'
              className='rounded-lg bg-blue-500 hover:opacity-80 duration-1000 active:scale-75 text-white py-2 font-semibold'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
