import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-80" style={{ backgroundImage: 'url(https://i.ibb.co/80XJPDW/people-meeting-community-center-23-2149155295.jpg)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <p className="mb-5 text-3xl font-extrabold text-black" >I Grow By Helping People In Need.</p>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square w-1/4 bg-red-500">

                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;