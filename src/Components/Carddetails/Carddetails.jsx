
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedDonation } from '../../Utility/localstorage';

const Carddetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);

  const handledonation = () => {
    savedDonation(idInt);
    toast('Successfully donated');
  };

  const { text_button_bg } = card;

  const textStyle = {
    backgroundColor: text_button_bg,
  };

  return (
    <div>
      <div className="">
        <div className="relative w-full bg-base-100 shadow-xl">
          <div className="relative w-full h-96">
            <img
              src={card.picture}
              alt="Shoes"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <button
              onClick={handledonation}
              className="text-xl font-medium p-2 text-white rounded-lg"
              style={textStyle}
            >
              Donate ${card.price}
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-black opacity-25 pointer-events-none"></div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{card.category}</h2>
          <p>{card.description}</p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Carddetails;


