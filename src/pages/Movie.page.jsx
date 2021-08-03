import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import Slider from 'react-slick';


// Component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import Privacy from '../components/Privacy Note/Privacy.component';

// Config
import TempPosters from '../config/TempPosters.config';

// context
import { MovieContext } from '../context/movie.context';

const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        ],
    };

    return (
        <>
            <MovieHero />

            <div className="container lg:ml-4 px-lg my-8 md:my-12 lg:w-2/3">

                {/* About the movie */}
                <div className="flex flex-col gap-3 items-start">
                    <h2 className="text-gray-800 text-2xl font-bold">
                        About the movie
                    </h2>
                    <p className="text-black">
                        {movie.overview}
                    </p>
                </div>

                {/* hr */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Applicable Offers */}
                <div className="my-8">

                    <h2 className="text-gray-800 text-2xl font-bold mb-4">
                        Applicable offers
                    </h2>

                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex flex-row gap-3 bg-yellow-100 p-2 md:p-3 border-yellow-600 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <h3 className="text-gray-700 text-xl">Visa Stream Offer</h3>
                                <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 bg-yellow-100 p-2 md:p-3 border-yellow-600 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <h3 className="text-gray-700 text-xl">Filmy Pass</h3>
                                <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* hr */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Cast */}
                <div className="my-8">
                    <h2 className="text-gray-800 text-2xl font-bold mb-4">
                        Cast & Crew
                    </h2>

                    <Slider {...settingsCast}>
                        {
                            cast.map((castdata) => (
                                <Cast
                                    image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                    castName={castdata.original_name}
                                    role={castdata.character}
                                />
                            ))
                        }
                    </Slider >
                </div>

                {/* hr */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Poster carousel */}

                {/* Carousel 1 */}
                <div className="my-8">
                    <PosterSlider
                        images={similarMovies}
                        title="You might also like"
                        isDark={false}
                        config={settings}
                    />
                </div>

                {/* hr */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Carousel 2 */}
                <div className="my-8">
                    <PosterSlider
                        images={recommendedMovies}
                        title="BMS XCLUSIV"
                        isDark={false}
                        config={settings}
                    />
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

export default Movie;
