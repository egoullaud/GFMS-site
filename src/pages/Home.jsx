import React from 'react'
import Analytics from '../components/Analytics'
import BlogHero from '../components/BlogHero'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <BlogHero/>
      <Cards/>
          </div>
  )
}

export default Home
