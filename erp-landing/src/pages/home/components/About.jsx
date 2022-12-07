import React from 'react'

const About = () => {
  return (
    <section className=' flex flex-col gap-2 -mt-1 px-5 md:px-24 py-5 md:py-12 z-20' id='about'>
      <h2 className='text-xl md:text-2xl font-bold text-blue-500 border-b-2 border-blue-500 pb-1 flex w-fit mx-auto'>
        ABOUT US
      </h2>
      <p className='text-xs hidden md:block md:text-sm md:text-center text-blue-500'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='grid md:grid-cols-2 my-5 gap-5 md:gap-10'>
        <div className='col-span-1'>
          <p className='text-sm md:text-base font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus tenetur,
            perferendis nisi itaque voluptatem omnis nihil eum dolor ipsam dolores amet provident
            commodi aut. Similique eius illum officia possimus sunt pariatur eum, porro labore quas
            quis ullam error placeat exercitationem vero optio, culpa nobis, esse at natus libero
            neque.
          </p>
        </div>
        <div className='col-span-1'>
          <p className='text-sm md:text-base font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus magni sapiente
            impedit. Cumque magnam hic mollitia aperiam accusamus illo voluptate esse necessitatibus
            sint sit voluptates aliquid non, modi ad provident ea reiciendis. Nostrum labore porro
            illum quisquam quis alias libero inventore repellendus reprehenderit fuga! Porro qui
            quisquam excepturi cumque dicta quam, perferendis nesciunt enim suscipit eius ut minus
            in.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
