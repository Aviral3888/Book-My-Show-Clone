import React from 'react'

// Component
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
    return (
        <>
            <div>

                {/* Content for Mobile devices */}
                <div
                    className="relative md:hidden w-full"
                    style={{ height: "calc(180vw)" }}
                >
                    <div className="absolute bottom-4 z-20 left-4" >
                        <MovieInfo />
                    </div>

                    <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="Poster"
                        className="w-full h-full"
                    />

                </div>

                {/* Content for Medium devices */}
                <div
                    className="relative hidden md:block w-full lg:hidden"
                    style={{ height: "calc(100vw)" }}
                >
                    <div className="absolute bottom-4 z-20" >
                        <MovieInfo />
                    </div>

                    <div className="w-full h-48 bg-opacity-70 absolute bg-black z-10 bottom-0" />
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="Poster"
                        className="w-full h-full"
                    />
                </div>

                {/* Content for Large devices */}
                <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                >

                    <div
                        className="absolute z-10 w-full h-full "
                        style={{ backgroundImage: "linear-gradient(90deg,  rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100% )" }}
                    />

                    <div className="absolute z-30 left-28 top-10 flex  items-center gap-10">
                        <div className="w-64 h-96 ">
                            <img
                                src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                                alt="Poster"
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div >
                            <MovieInfo />
                        </div>
                    </div>
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="Poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    )
};

export default MovieHero;

