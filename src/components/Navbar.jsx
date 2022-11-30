import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from "react-router-dom"

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=' flex justify-between items-center h-24 mx-auto px-4  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#d4674c]'><Link to='/'>GFMS.</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to='/products'>Products</Link></li>
        {/* <li className='p-4'>Blog</li> */}
       <li className='p-4'> <Link to="/about">About</Link></li>
        
        <li className='p-4'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
        
      </div>
      <div className={!nav ?  'fixed left-[-100%]'  : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
      <h1 className='w-full text-3xl font-bold text-[#d4674c] m-4'><Link to='/'>GFMS.</Link></h1>
        <ul className=' p-4 uppercase '>
        <li className='p-4 border-b border-gray-600'><Link to="/">Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to='/products'>Products</Link></li>
        {/* <li className='p-4 border-b border-gray-600'>Blog</li> */}
        <li className='p-4 border-b border-gray-600'><Link to="/about">About</Link></li>
        <li className='p-4'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
