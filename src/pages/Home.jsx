import React from 'react'
import Hero from '../components/Hero';  // Check if the file path is correct
import LatestCollection from '../components/LatestCollection';  // Check the path and case sensitivity
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';



const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home