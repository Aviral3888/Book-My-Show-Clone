import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-24 h-24">
                    <img
                        src={props.image}
                        alt="Crew Man"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h2 className="text-lg text-gray-800">{props.castName}</h2>
                <h5 className="text-sm text-gray-500">as {props.role}</h5>

            </div>
        </>
    )
};

export default Cast;
