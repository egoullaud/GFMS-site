import React from 'react'
import Typed from 'react-typed'
import label from '../assets/grandma-label.png'

function Hero() {
  return (
    <div className="text-white">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <img className='w-[200px] mx-auto' src={label} alt="muted-leaf" />
        <h1 className='md:text-5xl sm:text-6xl text-3xl font-bold md:py-6'>Grandma Finch's Maple Syrup</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>Perfect for</p>
            <Typed 
            className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['waffles', 'pancakes', 'french toast']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 '>100% Pure Maple Syrup made in Plymouth, Minnesota.</p>
      <button className='bg-[#d4674c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See Products</button>
     
      </div>

    </div>
  )
}

export default Hero
