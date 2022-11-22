import React from 'react'
import smlBtl from '../assets/small-bottle.png'
import mdBtl from '../assets/med-bottle.png'
import lrgBtl from '../assets/large-bottle.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import yellowLeaf from '../assets/yellow-leaf.jpg'
import Newsletter from '../components/Newsletter'

function Products() {
    const [open, setOpen] = useState();
    const handleOpen = (key) =>{
        setOpen(open !== key ? key : null)
    }

  return (
    <div className='m-0'>
        <div className='w-full'>
        <img className='h-[40vh] w-full object-cover' src={yellowLeaf} alt="" />
      </div>
      <div className=' bg-black w-[100%]'>
            <h1 className='text-white text-5xl font-bold text-center my-10 '>Our Products</h1>
        <div className=' flex flex-col w-[90%] mx-auto items-center justify-center'>
{/* small bottle     */}
            <div className=' bg-white w-full flex flex-col md:flex-row md:p-4 my-4 pb-5 md:rounded-none rounded-md justify-center items-center'>
              <div className='md:w-[30%] py-[6vh] flex'>  
                <img className='w-[100%] md:w-[30%] mx-auto bg-white' src={smlBtl} alt="sml.png" /></div>
              
                <div className='text-center font-medium md:w-[50%] my-auto'>
                    <h1 className='text-center font-bold text-xl'>Small Bottle</h1>
                    <p className='pb-2 border-b mx-8 mt-8'>$5.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>200ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                
                    <p className=' text-left mx-6 md:mx-[4rem] pt-4'> 
                    <span className='font-bold pb-5'>Description: </span> <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos debitis provident molestiae 
                    facilis id numquam temporibus placeat porro harum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Molestias, tenetur? Vel non asperiores assumenda molestiae.</p>
                </div>
            </div>
{/* Medium bottle  */}
        <div className=' bg-white w-full flex flex-col md:flex-row md:p-4 my-4 pb-5 md:rounded-none rounded-md justify-center items-center'>
              <div className='md:w-[30%] flex'>  
                <img className='w-[40%] mx-auto bg-white' src={mdBtl} alt="sml.png" />
              </div>
                <div className='text-center font-medium md:w-[50%] my-auto'>
                    <h1 className='text-center font-bold text-xl'>Medium Bottle</h1>
                    <p className='py-2 border-b mx-8 mt-8'>$8.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>500ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                    <p className=' text-left mx-6 md:mx-[4rem] pt-4'> 
                    <span className='font-bold'>Description: </span> <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos debitis provident molestiae 
                    facilis id numquam temporibus placeat porro harum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Molestias, tenetur? Vel non asperiores assumenda molestiae.</p>
                </div>
               
            </div>

{/* large bottle  */}
        <div className=' bg-white w-full flex flex-col md:flex-row md:p-4 my-4 pb-5 md:rounded-none rounded-md justify-center items-center'>
              <div className='md:w-[30%] flex'>  
                <img className='w-[30%] md:w-[40%] mx-auto bg-white' src={lrgBtl} alt="sml.png" /></div>
              
                <div className='text-center font-medium md:w-[50%] my-auto'>
                    <h1 className='text-center font-bold text-xl'>Large Bottle</h1>
                    <p className='py-2 border-b mx-8 mt-8'>$12.99 + tax</p>
                    <p className='py-2 border-b mx-8 '>750ml</p>
                    <p className='py-2 border-b mx-8 '>In Stock</p>
                
                    <p className=' text-left mx-6 md:mx-[4rem] pt-4'> 
                    <span className='font-bold'>Description: </span> <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos debitis provident molestiae 
                    facilis id numquam temporibus placeat porro harum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Molestias, tenetur? Vel non asperiores assumenda molestiae.</p>
                </div>
            </div>

{/* CONTACT CTA  */}
<div className='w-full py-16 text-white px-4'>
      <div className='flex flex-col my-4 items-center  justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to place an order?</h1>
            <div>     
                <button className='bg-[#d4674c] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'><Link to='/contact'>Contact Us</Link></button>
            </div>
    
      </div>
    </div>
          
    </div>
    </div>
    </div>
  )
}

export default Products
