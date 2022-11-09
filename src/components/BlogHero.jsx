import React from 'react'
import mutedLeaf from '../assets/muted-leaf.jpg'
import pourSyrup from '../assets/pouring-syrup.jpg'


function BlogHero() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            
            <div className='flex flex-col justify-center pt-4 pl-4'>
                <p className='text-[#d4674c] font-bold '>Current News</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Visit our Blog</h1>
                <p>We love to share our process, and bring our syrup-lovers along for the ride! Check out our blog posts
                    to learn about how we make our syrup! 
                </p>
                     <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#d4674c]'>
                        Visit our Blog</button>
            </div>
            <img className='w-[600px] mr-4 md:my-auto md:mx-4' src={pourSyrup} alt="muted-leaf" />
        </div>
      
    </div>
  )
}

export default BlogHero
