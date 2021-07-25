import React, { useContext, useState } from 'react'

// component
import PaymentModal from '../PaymentModal/Payment.component';

// context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const { movie } = useContext(MovieContext);

    // optional chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 lg:gap-8">

                <div className="flex items-center gap-3  md:px-4">
                    <div className="w-28 h-6">
                        <img
                            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="Premier"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-800 p-1 px-2 text-xs text-white rounded-xl ">
                        Streaming Now
                    </span>
                </div>

                <h1 className="hidden lg:block text-white lg:text-4xl font-bold lg:ml-4">
                    {movie.original_title}
                </h1>

                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-8 ">
                    <div className="text-white font-light flex flex-col gap-2 lg:gap-6 md:px-4">
                        <h4>4k &bull; {movie.original_language}</h4>
                        <h4>{Math.floor(movie.runtime / 60)}hr {(movie.runtime % 60)}min &bull; {genres} &bull; 13+ </h4>
                    </div>

                    <div className="flex items-center gap-4 md:w-screen lg:w-full md:px-4">
                        <button
                            onClick={rentMovies}
                            className="bg-red-600 w-full py-2 lg:py-3 text-white font-semibold rounded-lg"
                        >
                            Rent ₹149
                        </button>
                        <button
                            onClick={buyMovies}
                            className="bg-red-600 w-full py-2 lg:py-3 text-white font-semibold rounded-lg"
                        >
                            Buy ₹599
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default MovieInfo;
