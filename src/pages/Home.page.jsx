import React from 'react';

// Components
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// config
import TempPosters from '../config/TempPosters.config';

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
                        <PosterSlider
                            images={TempPosters}
                            title="Premieres"
                            subtitle="Brand new releases every Friday"
                            isDark={true}

                        />
                    </div>
                </div>

                {/* Section 3: Online Streaming Events  */}
                <div className="container mx-auto px-lg ">
                    <PosterSlider
                        images={TempPosters}
                        title="Online Streaming Events"
                        isDark={false}
                    />
                </div>

                {/* Section 3: Online Streaming Events  */}
                <div className="container mx-auto px-lg ">
                    <PosterSlider
                        images={TempPosters}
                        title="Outdoor Events"
                        isDark={false}
                    />
                </div>
            </div>
        </>
    )
};

export default HomePage;