import React,{useEffect} from 'react'
import {Button} from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
 const [photoUrl, setPhotoUrl] = React.useState('');
       useEffect(() => {
         place && GetPlacePhoto();
       }, [place])
     
       const GetPlacePhoto=async()=>{
         const data ={
           textQuery:place.placeName
         }
         const result = await GetPlaceDetails(data).then(resp=>{
         
     
           const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
           setPhotoUrl(PhotoUrl)
         })}
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
    <div className='border object-cover rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all duration-300 hover:shadow ease-in-out cursor-pointer'>
        <img src={photoUrl?photoUrl:'/placeholder.jpeg'}
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
