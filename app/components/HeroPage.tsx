import React from 'react';
import Image from 'next/image';


const HeroPage = () => {
  return (
    <>
    <div>
      <h1 className='mx-auto text-center font-bold text-3xl uppercase font-mono text-[#009788] mb-10'>Bug Tracker</h1>

      <div>
        <Image className='mx-auto' src='/bugImage.png' alt='bugImage' width={300} height={300}></Image>
      </div>

      <div className='mx-auto text-center justify-between text-[#003231]'>
        <h2 className='font-bold text-xl gap-y-2'>Struggling with bugs on your laptop/computer?</h2>
        <p>We are the help you need. We are the best at what we do, call us to make appointment</p>
      </div>
      </div>
    </>
  )
}

export default HeroPage