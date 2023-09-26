import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Cards = () => {
    const [cards ,setcards]=useState([])
    useEffect(()=>{
        fetch ('data.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
    return (
        <div >
            
            
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {
                   cards.map(card =><Card key={card.id} card={card}></Card>) 
                }
            </div>
        </div>
    );
};

export default Cards;