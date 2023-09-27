
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoreddonation } from '../../Utility/localstorage';

const Donation = () => {
  const cards = useLoaderData();
  const [donation, setDonation] = useState([]);
  const [seeall, setseeall] = useState(4);

  useEffect(() => {
    const storeddonationid = getstoreddonation();
    if (cards.length > 0) {
      const itemdonated = [];
      for (const id of storeddonationid) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          itemdonated.push(card);
        }
      }
      setDonation(itemdonated);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2" >
        {donation.slice(0, seeall).map((card) => (
          <div key={card.id}>
            <div className="flex gap-2" style={{ backgroundColor: card.card_bg }}>
              <div className="w-1/3" > 
                <img className="w-13 h-40" src={card.picture} alt="Movie" />
              </div>
              <div className="w-2/3 text-left">
                <h2 style={{ color: card.text_button_bg }}>{card.category}</h2>
                <h2>{card.title}</h2>
                <p  style={{ color: card.text_button_bg }}>{card.price}</p>
                <button className="bg-blue-700 p-1 rounded-md h-9 text-white" style={{ backgroundColor: card.text_button_bg }}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={seeall === cards.length && 'hidden'}>
        <button onClick={() => setseeall(cards.length)} className="bg-green-700 rounded-md p-2 w-24 mt-5">
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;
