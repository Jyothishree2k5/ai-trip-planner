import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
  if (!trip || !trip.tripData) {
    return <div>Loading...</div>;
  }

  // Extract just the number from the duration string (e.g., "2 Days" -> 2)
  const numberOfDays = parseInt(trip.tripData.duration?.split(' ')[0]);

  if (isNaN(numberOfDays) || numberOfDays <= 0) {
    return <div>Invalid duration</div>;
  }

  return (
    <div>
        <h2 className='font-bold text-lg'>Places To Visit</h2>
        <div>
            {Array.from({ length: numberOfDays }, (_, index) => {
                const dayNumber = index + 1;
                const dayKey = `day${dayNumber}`;
                const dayData = trip.tripData.itinerary[dayKey];

                if (!dayData) {
                    return <div key={dayNumber}>No data for Day {dayNumber}</div>;
                }

                return (
                    <div className='mt-5' key={dayNumber}>
                        <h2 className="font-medium text-lg">Day {dayNumber}</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {dayData.places?.map((place, placeIndex) => (
                                <div key={placeIndex}>
                                    
                                    <div className='my-3'> 
                                        <h2 className='font-medium text-sm text-orange-600'>⏲️ {place.time}</h2>
                                        <PlaceCardItem place={place} />
                                    </div>
                                 
                                </div>
                            )) || <div>No places listed for this day</div>}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default PlacesToVisit
