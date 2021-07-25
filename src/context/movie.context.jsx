import React, { useState } from 'react';

export const MovieContext = React.createContext();

// context is a method of state management in react
// In context store the data is stored globally 
// provider : provide the data from the context store

const MovieProvider = ({ children }) => {

    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
    });

    return (
        <MovieContext.Provider value={{ movie, setMovie }} >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;