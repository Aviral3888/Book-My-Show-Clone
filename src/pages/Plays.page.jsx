import React from 'react';

// Component
import Poster from '../components/Poster/poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-lg my-4 lg:my-8">

                <div className="w-full flex flex-col gap-3 lg:flex lg:flex-row-reverse lg:gap-4">

                    {/* Plays Section */}
                    <div className="lg:w-3/4">
                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-gray-800 ml-1 md:ml-3 lg:mb-6">
                            Plays in Delhi NCR
                        </h2>

                        {/* Poster Carousels */}
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                                    title="Admission - 31st July (Saturday)
                            "
                                    subtitle="English ₹199 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` Surabhi Theatre Play
                            "
                                    subtitle="Telugu ₹149 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309050-fsgpqjlfhw-portrait.jpg"
                                    title="`BHAKTHA PRAHLADA` Surabhi Theatre Play
                            "
                                    subtitle="Telugu ₹149 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00309686-euqnsunndb-portrait.jpg"
                                    title="Surabhi Theatre Play
                            "
                                    subtitle="Telugu ₹109 onwards"
                                />
                            </div>
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
        </>
    )
};

export default Plays;
