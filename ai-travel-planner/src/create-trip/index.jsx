import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState} from 'react'
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModal';
import { setDoc , doc} from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function CreateTrip ()  {
  const [place, setPlace] = useState(null);

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name,value) => {
   
    setFormData({
      ...formData,
      [name]: value
    })
    
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const OnGenerateTrip=async()=>{
    if(formData?.days>5 && !formData?.budget||!formData?.traveler||!formData?.location){
      toast("Please fill all the fields")
      return;
    }
    setLoading(true);
   
    const FINAL_PROMPT = AI_PROMPT
    .replace('{location}', formData?.location?.label)
    .replace('{totalDays}', formData?.days)
    .replace('{traveler}', formData?.traveler)
    .replace('{budget}', formData?.budget)
    .replace('{totalDays}', formData?.days)



    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log('--',result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
    
    
  }
  const SaveAiTrip = async(TripData)=>{

    try{
    const user= JSON.parse(localStorage.getItem('user') || '{"email": "guest@example.com"}');
    const docId =  Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection : formData,
      tripData : JSON.parse(TripData),
      userEmail:user.email || 'guest@example.com',
      id:docId

    });
    navigate(`/view-trip/${docId}`);
    

    console.log('Document saved successfully');
  }catch (error) {
    console.error('Firebase save error:', error);
    throw error;
  } 
    
  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-32'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences🏕️🏝️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information about your trip and we will help you find the best match for you. </p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is the destination of your trip?</h2>
          <GooglePlacesAutocomplete 
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            value: place,
            onChange: (value) => {setPlace(value);
              handleInputChange('location',value);
              
            },
            
          }}
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning to visit?</h2>
          <Input placeholder={'Ex.2'} type={'number'}
          onChange={(e)=>handleInputChange('days',e.target.value)}/>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is the budget for your trip?</h2>
          <h3 className='text-xl my-3 text-gray-500'>The budget is exclusively allocated for activities and dining purposes  </h3>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item,index)=>(
              <div key={index} 
              onClick={()=>handleInputChange('budget', item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${(formData.budget === item.title&&'shadow-lg border-black')}`}> 
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-gray-500 text-sm'>{item.desc}</h2>
              </div>
            ))}
          </div>
          </div>
          <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item,index)=>(
              <div key={index} 
              onClick={()=>handleInputChange('traveler', item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${(formData.traveler === item.people&&'shadow-lg border-black')}`}> 
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-gray-500 text-sm'>{item.desc}</h2>
              </div>
            ))}
          </div>
          </div>
      </div>
        <div className='my-10 justify-end flex'>
        <Button onClick={OnGenerateTrip}
        disabled={loading}
        >{loading ? 
        <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/> : 'Generate Trip'} 
        </Button>
          </div>  
      
    
    </div>
  )
}

export default CreateTrip
