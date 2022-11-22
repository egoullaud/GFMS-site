import React from 'react'
import mutedLeaf from '../assets/muted-leaf.jpg'
import aboutDad from '../assets/dad-about.jpg'
import groupPhoto from '../assets/group-photo.jpg'
import Newsletter from '../components/Newsletter'


function About() {
  return (
    <div className='w-full mb-[5vh] h-full flex flex-col items-center'>
      <div className='w-full'>
        <img className='h-[40vh] w-full object-cover' src={mutedLeaf} alt="" />
      </div>
      <div className=
      'bg-white text-black  flex flex-col sm:w-[100%] lg:mx-[20vh] md:mx-[5vh] pb-[10vh]'>
        <h1 className='w-full text-center font-bold text-2xl py-10'>Meet the Team</h1>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <img className="lg:w-[40%] md:w-[50%] sm:mx-2 w-[90%] rounded-lg" src={groupPhoto} alt="" />
            <p className='md:w-[40%] md:mx-5 md:mt-0 md:text-left lg:mx-[3rem] w-[80%] mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor rerum porro. Corporis inventore eos illum vel soluta quae, iure dignissimos facilis mollitia incidunt officia tenetur autem adipisci obcaecati modi neque eum cumque laborum vitae!
            <br /> <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde consectetur dicta dignissimos vero explicabo eum, magni cupiditate, iusto tempora delectus! Facere omnis iure nesciunt.</p>
        </div>
       
      </div>
      <div className='md: mx-[3rem]'>
      <Newsletter/>
      </div>
      
    </div>
  )
}

export default About
