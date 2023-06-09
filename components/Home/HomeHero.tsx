import React, { useEffect, useState } from 'react'

type Props = {}

const HomeHero = (props: Props) => {
    



   
      return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
          
           
          <div className='flex flex-col justify-between items-center   backdrop-blur-md shadow-2xl  p-20 rounded-2xl'> 
          <h4 className='relative text-5xl lg:text-[90px]  text-white font-extralight font-serif' >CafeYakamoz</h4>
 
        <h1 className='text-3xl lg:text-3xl text-white mt-4 shadow-2xl relative font-extralight font-serif scroll-px-10'>
        Coming Soon
        </h1>
          </div>

          <div> </div>
        </div>
      );
}

export default HomeHero