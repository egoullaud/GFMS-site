import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4  text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#d4674c]'>GFMS.</h1>
            <p className='py-4'>100% Pure Maple Syrup made by real people.</p>
      </div>
      <div>
            <p className='py-4 text-center text-sm'>Copyright 2022</p>
      </div>
    </div>
  )
}

export default Footer
