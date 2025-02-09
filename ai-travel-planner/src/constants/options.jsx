export const SelectTravelesList =[

    {
        id:1,
        title:'Just Me',
        desc:'A sole traveler',
        icon:'👤',
        people:'1'
    },
    {
        id:2,
        title:'Couple',
        desc:'A couple traveling together',
        icon:'👫',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of family members',
        icon:'👪',
        people:'3 to 5 People'
    },{
        id:4,
        title:'Friends',
        desc:'A group of friends',
        icon:'👥',
        people:'5 to 10 People'
    },
]

export const SelectBudgetOptions =[
    {
        id:1,
        title:'Low Budget',
        desc:'Stay consistent with a low budget',
        icon:'💰',
    },{
        id:2,
        title:'Medium Budget',
        desc:'Keep cost on the avearge side',
        icon:'🏦',
    },,{
        id:3,
        title:'Luxury',
        desc:'Stay consistent with a luxury budget',
        icon:'💸',
    },
    

    ]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} , with a {budget} budget, give me Hotels options list with HotelName, Hotel address,Price,hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url,Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.';