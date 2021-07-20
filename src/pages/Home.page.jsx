import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';

const HomePage = () => {

    return (
        <>
            <div className="container mx-auto px-md">
                <h1 className="text-2xl font-bold text-gray-800 my-3 px-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
};

export default HomePage;