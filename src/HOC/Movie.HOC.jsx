import React from 'react';
import { Route } from 'react-router-dom';

// Layout
import MovieLayout from '../layouts/Movie.layout';

const MovieHOC = ({ component: Component, ...rest }) => {

    // component  ( destructuring of component )
    // path
    // exact

    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}
            />
        </>
    );
};

export default MovieHOC;