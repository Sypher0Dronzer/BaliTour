import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("./hero2.png")] bg-no-repeat bg-cover bg-center h-screen pt-16  relative'>
        <div className="absolute w-full h-full bg-gradient-to-r from-black/5 via-black/20 to-black/5 z-10 top-0 left-0 flex flex-col items-center justify-center">
      <h1 className='hero-header text-8xl tracking-wide lg:text-[170px] char-border'>Bali </h1>
      <h1 className='hero-header text-6xl tracking-wide lg:text-9xl char-border'>Getaway </h1>
      <p className='lg:text-6xl text-xl  text-white font-semibold mt-6'>15th May - 22nd May</p>

      <button className='btn btn-primary mt-6 border-1 border-white'> Book Your Slot Now</button>

        </div>

    </div>
  )
}

export default Hero
