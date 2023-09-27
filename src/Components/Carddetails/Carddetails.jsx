import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedDonation } from '../../Utility/localstorage';


const Carddetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt)
    const handledonation=()=>{
        savedDonation(idInt);

        toast('successfully donated')
    }
    const{text_button_bg}=card
    const textStyle={
        backgroundColor: text_button_bg,
    }
    // const overlayStyle = {
    //     content: '""',
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     height: '100%', // Adjust this to control the size of the overlay (lower quarter)
    //     backgroundColor: 'hsl(var(--n)/var(--tw-bg-opacity))', // Semi-transparent black overlay
    //     // --tw-bg-opacity:"0.5",
    // };
    return (
        <div>
        
            <div className=''>
                <div className=" w-full bg-base-100 shadow-xl">
                    
                        <img src={card.picture} alt="Shoes" className="rounded-xl w-full h-96  "  />
                  
                    <div className="card-actions -mt-10">
                            <button onClick={handledonation} className="text-xl font-medium p-2 text-white ml-5 rounded-lg" style={textStyle}>Donate{card.price}</button>
                        </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{card.category}</h2>
                        <p>{card.description}</p>
                        
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Carddetails;