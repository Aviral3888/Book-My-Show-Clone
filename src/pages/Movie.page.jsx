import React, { Component } from 'react';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';

// Component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// Config
import TempPosters from '../config/TempPosters.config';

const Movie = () => {

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
                        Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
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

                    <div className="flex flex-wrap items-center gap-8">
                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                            castName="Ben Affleck"
                            role="Batman"
                        />

                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
                            castName="Henry Cavill"
                            role="Superman"
                        />

                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />

                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
                            castName="Ray Fisher"
                            role="Victor Stone"
                        />

                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/amy-adams-148-24-03-2017-12-40-00.jpg"
                            castName="Amy Adams"
                            role="Lois Lane"
                        />

                    </div>
                </div>

                {/* hr */}
                <div className="my-8">
                    <hr />
                </div>

                {/* Poster carousel */}

                {/* Carousel 1 */}
                <div className="my-8">
                    <PosterSlider
                        images={TempPosters}
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
                        images={TempPosters}
                        title="BMS XCLUSIV"
                        isDark={false}
                        config={settings}
                    />
                </div>
            </div>

        </>
    )
};

export default Movie;
