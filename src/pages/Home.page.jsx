import React, { Component } from 'react';

// Components
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import Premier from '../components/Premier/Premier.component';

const HomePage = () => {

    return (
        <>
            <div className="flex flex-col gap-12">

                {/* Section 1: Best of Entertainment */}
                <div className="container mx-auto px-md">
                    <h1 className="text-2xl font-bold text-gray-800 my-3 px-3">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                {/* Section 2: PREMIER */}
                <div className="bg-project-50 py-8">
                    <div className="container mx-auto px-lg flex flex-col gap-5">
                        <div className="hidden md:flex">
                            <img
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Premier"
                                className="w-full h-full"
                            />
                        </div>
                        <Premier />
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;