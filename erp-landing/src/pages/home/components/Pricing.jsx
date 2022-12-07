import React from 'react'
import Card from './fragments/Card'

const Pricing = () => {
  return (
    <section className='px-5 md:px-24 pb-5' id='pricing'>
      <h2 className='text-xl md:text-2xl font-bold pb-1 border-b-2 flex w-fit mx-auto text-blue-400 border-blue-400'>
        PRICING
      </h2>
      <p className='text-xs md:text-sm text-blue-400 text-center mt-1'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='grid md:grid-cols-3 gap-10 my-5 md:my-10'>
        <Card title='BASIC' textButton='TRY IT' price='0' />
        <Card title='BUSINESS' textButton='SIGN IN' price='50.000' />
        <Card title='ENTREPRENEUR' textButton='SUBSCRIBE' price='150.000' />
      </div>
    </section>
  )
}

export default Pricing
