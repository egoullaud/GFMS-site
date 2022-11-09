import React from 'react'
import mutedLeaf from '../assets/muted-leaf.jpg'


function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[600px] mr-4 md:my-auto md:mx-auto' src={mutedLeaf} alt="muted-leaf" />
            <div className='flex flex-col justify-center pt-4 pl-4'>
                <p className='text-[#d4674c] font-bold '>From Yard to Table</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Made by real people, from real trees</h1>
                <p>Produced in our backyard, this hobby turned into a passionate business providing maple syrup to our community. 
                  We pride ourselves on its organic, 100% pure quality, and extraordinary clarity and taste. 
                </p>
                     <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#d4674c]'>Meet the Team</button>
            </div>
        </div>
      
    </div>
  )
}

export default Analytics
