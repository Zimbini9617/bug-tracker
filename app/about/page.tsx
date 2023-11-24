import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div className='flex flex-row'>
      <h1 className='mx-auto text-center text-[#425E5B] font-bold mb-6 text-3xl'>WE PUT OUR CUSTOMERS NEEDS FIRST</h1>

      <div className='text-[#425E5B]'>
        <h2 className='font-bold text-2xl'>OUR VISION</h2>
        <p className='text-xl'>Looking to the future, <br /> we see a world where<br /> everyone is free of <span className='font-bold text-red-800'>BUGS!</span></p>
      </div>
    </div>

    <div>
      <p className='text-[#425E5B] text-xl mt-10'>
        We are passionate about helping our customers to stay free of bugs on their devices.<br />
        We are excited to play a huge role in bringing faster way to fix bugs, in a more affordable<br /> way to all communities.<br />
        We promise to give the best services as possible to our beloved customers.
      </p>
    </div>
    </>
  )
}

export default AboutPage;