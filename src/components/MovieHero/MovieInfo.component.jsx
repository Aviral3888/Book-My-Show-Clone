import React from 'react'

const MovieInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-3 lg:gap-8">

                <div className="flex items-center gap-3">
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

                <h1 className="hidden lg:block text-white lg:text-4xl font-bold">
                    Zack Synder's Justice League
                </h1>

                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-8">
                    <div className="text-white font-light flex flex-col gap-2 lg:gap-6">
                        <h4>4k &bull; English &bull; Action </h4>
                        <h4>2h 10m &bull; Sci-Fi, Thriller &bull; 13+ </h4>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg" >
                            Rent ₹149
                        </button>
                        <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg" >
                            Buy ₹599
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default MovieInfo;
