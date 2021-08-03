import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import Privacy from '../components/Privacy Note/Privacy.component';

// config
import TempPosters from '../config/TempPosters.config';


const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    // Premier Section UseEffect
    useEffect(() => {

        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }

        requestPopularMovies();

    }, []);

    // Online Streaming Events Section UseEffect
    useEffect(() => {

        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        }

        requestTopRatedMovies();

    }, []);

    // Outdoor Events Section UseEffect
    useEffect(() => {

        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/popular");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }

        requestUpcomingMovies();

    }, []);



    return (
        <>
            <div className="flex flex-col gap-12">

                {/* Section 1: Best of Entertainment */}
                <div className="container mx-auto px-md lg:mt-10 lg:mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 my-3  px-3">The Best of Entertainment</h1>
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
                            images={popularMovies}
                            title="Premieres"
                            subtitle="Brand new releases every Friday"
                            isDark={true}
                        />
                    </div>
                </div>

                {/* Section 3: Online Streaming Events  */}
                <div className="container mx-auto px-lg shadow-lg">
                    <PosterSlider
                        images={topRatedMovies}
                        title="Online Streaming Events"
                        isDark={false}
                    />
                </div>

                {/* Section 4: Online Streaming Events  */}
                <div className="container mx-auto px-lg ">
                    <PosterSlider
                        images={upcomingMovies}
                        title="Outdoor Events"
                        isDark={false}
                    />
                </div>

                <div className="flex justify-center md:mb-10">
                    <Link to="/plays">
                        <button
                            className="bg-red-600 border-2 border-solid border-red-800 py-2 px-4 rounded-md hover:bg-red-800"
                        >
                            <p className="text-gray-200 font-medium hover:text-white">
                                View TV Shows
                            </p>
                        </button>
                    </Link>
                </div>

                {/* Section 5: Privacy Note */}
                <div className="hidden lg:block container mx-auto px-lg pb-5 pt-3 bg-gray-200">
                    <Privacy />
                </div>

            </div>
        </>
    )
};

export default HomePage;