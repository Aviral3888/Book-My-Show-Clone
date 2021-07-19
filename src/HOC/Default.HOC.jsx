import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';

// Layout
import Layout from '../layouts/Default.layout';

const DefaultHOC = ({ component: Component, ...rest }) => {

    // component  ( destructuring of component )
    // path
    // exact

    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )} />

        </>
    );
};

export default DefaultHOC;