// import React from 'react';

import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id, picture, category, title, description, price, category_bg, card_bg,text_button_bg } = card;

    // Create an inline style object with the background colors
    const cardStyle = {
        backgroundColor: card_bg,
    };

    const categoryStyle = {
        backgroundColor: card_bg,
        color: text_button_bg,
       
    };
    const textStyle={
        color: text_button_bg,
    }
   
    return (
       <Link to={`/card/${id}`}>
             <div className=''>
            <div className=" shadow-xl" style={cardStyle}>
                <figure className=" w-full  
                ">
                    <img  src={picture} alt="Shoes" className="h-30 w-full" />
                </figure>
                <div className="pt-2" >
                    <h2 className="w-1/3 rounded shadow-md ml-4 font-medium text-left" style={categoryStyle}>{category}</h2>
                    <p className="font-bold text-left pl-5" style={textStyle}>{title}</p>
                    <p className=" text-left pl-2">{description}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
       </Link>
    ); 
};

export default Card;
 