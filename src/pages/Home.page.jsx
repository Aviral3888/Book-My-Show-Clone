import React, { Component } from 'react';

// Components
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import Premier from '../components/Premier/Premier.component';

const HomePage = () => {

    return (
        <>
            <div className="container mx-auto px-md">
                <h1 className="text-2xl font-bold text-gray-800 my-3 px-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
                <div className="my-10">
                    <Premier />
                </div>
            </div>
        </>
    )
};

export default HomePage;