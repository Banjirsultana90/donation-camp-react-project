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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'> 
            {/* <h2>Donation:{donation.length}</h2> */}
            {
                donation.map(card => <div key={card.id} >
                    <div className="card card-side bg-base-100 shadow-xl ">
                        <figure><img src={card.picture} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.category}</h2>
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
            <button className='btn btn-secondary'>See All</button>
        </div>
        
    );
};

export default Donation;