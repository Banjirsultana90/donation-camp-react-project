import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoreddonation } from '../../Utility/localstorage';

const Donation = () => {
    const cards = useLoaderData()
    const [donation, setDonation] = useState([])

    useEffect(() => {
        const storeddonationid = getstoreddonation()


        if (cards.length > 0) {
            const itemdonated = [];
            for (const id of storeddonationid) {
                const card = cards.find(card => card.id === id)
                if (card) {
                    itemdonated.push(card)
                }
            }
            setDonation(itemdonated)
            // console.log(setDonation)
            // console.log(cards,itemdonated,storeddonationid)
        }


    }

        ,
        [])
    return (
        <><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
            {donation.map(card => <div key={card.id}>

                <div className='flex gap-2'>
                    <div className='w-1/3 '>
                        <img className="w-13 h-40" src={card.picture} alt="Movie" />

                    </div>
                    <div className='w-2/3 text-left'>
                        <h2 className="">{card.category}</h2>
                        <h2 className="">{card.title}</h2>
                        <p>{card.price}</p>
                        <button className="bg-blue-700 p-2 rounded-md h-9">View Details</button>

                    </div>
                </div>
              

            </div>)}

        </div>
        <div className='mt-5'> <button className='bg-green-700 rounded-md p-2 w-24'>See All</button>
         </div>
        </>
        
        
    );
};

export default Donation;