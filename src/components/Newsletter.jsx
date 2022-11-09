import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to know where to purchase our product?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#d4674c] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Notify Me</button>
               
            </div>
            <p>Coming soon to a <span className='text-[#d4674c]'>Farmer's Market</span> near you.</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
