import React from 'react'
import {Button} from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all duration-300 hover:shadow ease-in-out cursor-pointer'>
        <img src='/placeholder.jpeg' 
        className='w-[130px] h-[130px] object-cover rounded-xl' />
        <div>
            <h2 className='font-bold text-lg'> {place.placeName} </h2>
            <p className='text-sm text-gray-400'>{place.placeDetails}</p>
            <h2 className='text-md text-gray-800'>📍{place.travelTime}</h2>
            <Button size="sm"><FaMapLocationDot /> </Button>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem
