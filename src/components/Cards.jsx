import React from 'react'
import smlBtl from '../assets/small-bottle.png'
import mdBtl from '../assets/med-bottle.png'
import lrgBtl from '../assets/large-bottle.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-black'>
    <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-6 md:ml-[0rem] lg:ml-[20rem]'>Our Products</h1>
        <div className='max-w-[1240px] mx-4 md:mx-auto grid md:grid-cols-3 gap-8'>
            <div className=' bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
              
                <img className=' w-40 mx-auto my-[2.5rem] bg-white' src={smlBtl} alt="sml.png" />
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>$5.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>200ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                </div>
                <button className='bg-[#d4674c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Order Now</button>
            </div>
            <div className='w-full bg-white shadow-xl flex flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto my-2 bg-white' src={lrgBtl} alt="lrg.png" />
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>$12.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>750ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#d4674c]'>Order Now</button>
            </div>
            <div className=' bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto my-2 bg-transparent' src={mdBtl} alt="med.png" />
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>$8.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>500ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                </div>
                
                
                <button className='bg-[#d4674c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
