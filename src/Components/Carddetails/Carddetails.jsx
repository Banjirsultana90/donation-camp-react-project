import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';

const Carddetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt)
    const handledonation=()=>{
        toast('successfully donated')
    }
    return (
        <div>
            <h2>Details of id:</h2>
            <div className=''>
                <div className=" w-full bg-base-100 shadow-xl">
                    
                        <img src={card.picture} alt="Shoes" className="rounded-xl w-full h-96" />
                  
                    <div className="card-actions -mt-10">
                            <button onClick={handledonation} className="btn btn-primary">{card.price}</button>
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