import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img  className='w-full md:max-w-[450px]' src={ assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3  text-gray-600'>
        <p> Forever Fashion design is the art of applying design, aesthetics, clothing construction and natural beauty to clothing and its accessories. It is influenced by culture and different trends and has varied over time and place.</p>
         <p>Fashion is self-expression that constantly adapts and evolves, showcasing its ever-changing nature. Just as a garden blooms with diverse flowers, fashion embraces the beauty of uniqueness, celebrating the kaleidoscope of human identities. It is a mirror that reflects the pulse of society, capturing the zeitgeist and translating it into wearable art</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Developing a strong sense of creativity and an eye for aesthetics is essential. Technical Skills: Proficiency in technical aspects of fashion design is crucial. This includes sketching and illustration skills to communicate design ideas.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'> 
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality:Assurance</b>
          <p className='text-gray-600'>Fashion designers should have a good understanding of historical and cultural influences on fashion, as well as the ability to forecast future trends in fashion.</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p  className='text-gray-600'> Fashion designers need strong communication skills to effectively convey their design ideas to clients, manufacturers, and team members. The role and responsibilities of a fashion designer can vary, but the basics involve:</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'>Proportion and balance are the keys to a perfect design, as they make the design more visually appealing and are a guide to setting the piece of clothing in just the right place. Closely related to this principle are harmony and unity, which work in a somewhat similar manner as the above and make sure that the garment gives out a cohesive message.:</p>
        </div>

      </div>
      
    </div>
  
  )
}

export default About