import React from 'react'
import { Button } from '@/components/ui/button'
import { RiSendPlaneFill } from "react-icons/ri";

function InfoSection ({trip}) {
  return (
    <div>
        <img src='/placeholder.jpeg' className='w-full h-[340px] object-cover rounded' />
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🗓️ {trip.userSelection?.days} Days</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip.userSelection?.budget} </h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 No. of travelers: {trip.userSelection?.traveler} People</h2>
                </div>
            </div>
            <Button> 
            <RiSendPlaneFill />
            </Button>
        </div>
        
    </div>
  )
}

export default InfoSection