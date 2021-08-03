import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component
// import Poster from '../components/Poster/poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import Privacy from '../components/Privacy Note/Privacy.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

const Plays = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);


    // Premier Section UseEffect
    useEffect(() => {

        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/tv/popular");
            setPopularMovies(getPopularMovies.data.results);
        }

        requestPopularMovies();

    }, []);

    useEffect(() => {

        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/tv/top_rated");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }

        requestUpcomingMovies();

    }, []);


    const settingsPlays = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        ],
    };


    return (
        <>
            <div className="container mx-auto px-lg my-4 lg:my-8">

                <div className="w-full flex flex-col gap-3 lg:flex lg:flex-row-reverse lg:gap-4">

                    {/* Plays Section */}
                    <div className="lg:w-3/4 flex gap-3">

                        <div className="container mb-5">
                            <PosterSlider
                                images={popularMovies}
                                title="Popular TV Shows"
                                isDark={false}
                                config={settingsPlays}
                            />
                            <PosterSlider
                                images={upcomingMovies}
                                title="Top Rated TV Shows"
                                isDark={false}
                                config={settingsPlays}
                            />
                        </div>


                    </div>

                    {/* Filter Section */}
                    <div className="hidden lg:block lg:w-1/4 ">
                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-gray-800 ml-1 md:ml-3 lg:mb-6">
                            Filters
                        </h2>
                        <div className="flex flex-col gap-4">
                            <PlaysFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}

                            />
                            <PlaysFilter
                                title="Language"
                                tags={["Hindi", "English", "Telugu"]}
                            />
                            <PlaysFilter
                                title="Genres"
                                tags={["Drama", "Comedy", "Historical", "Mythological"]}
                            />
                        </div>
                    </div>

                </div>

            </div>

            <div className="container mx-auto px-lg  bg-gray-200">
                {/* Section 5: Privacy Note */}
                <div className="hidden lg:block container mx-auto px-lg pb-5 pt-3">
                    <Privacy />
                </div>
            </div>
        </>
    )
};

export default Plays;
