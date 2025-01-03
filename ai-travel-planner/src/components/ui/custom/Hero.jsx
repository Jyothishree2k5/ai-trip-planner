import React from 'react'
import { Button } from '../button';

function Hero() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start mx-auto px-4 md:px-8 gap-6 bg-gradient-to-b from-blue-50 to-white max-w-6xl pt-20">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-[60px] text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in max-w-4xl">
          Your Dream Journey, Tailored by AI: Personalized Itineraries Just for You!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center max-w-4xl">Your Personalized trip planner powered by AI, where your dreams become reality</p>
        <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors'>Get Started, It's Free</Button>    
      </div>
    );
  }
  
  
  
  
  
 
  

export default Hero