// import React from 'react';

const Card = ({ card }) => {
    const { picture, category, title, description, price, category_bg, card_bg,text_button_bg } = card;

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
        <div className=''>
            <div className=" shadow-xl" style={cardStyle}>
                <figure className=" w-full  ">
                    <img  src={picture} alt="Shoes" className="h-30 w-full" />
                </figure>
                <div className="pt-2" >
                    <h2 className="w-1/3 rounded shadow-md ml-4 font-extrabold" style={categoryStyle}>{category}</h2>
                    <p className="font-extrabold" style={textStyle}>{title}</p>
                    <p className="">{description}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
