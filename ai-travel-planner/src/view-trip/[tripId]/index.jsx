import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { db } from '@/service/firebaseConfig';
import { useEffect,useState } from 'react';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';


function Viewtrip () {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripId && GetTripData();
      }, [tripId]);

    const GetTripData=async()=>{
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            toast("No trip found");
          }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56 mt-20 ' >
      {/* Information section */}
      <InfoSection trip={trip}/>
      

      {/* Recommended Hotels */}
      <Hotels trip={trip}/>

      {/* Daily Plan */} 
      <PlacesToVisit trip={trip}/>

      <Footer trip={trip}/>
    </div>
    
  )
}

export default Viewtrip
