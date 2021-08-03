import React from 'react';

// Component
import Navbar from '../components/Navbar/navbar.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import Footer from '../components/Footer/Footer.component';

const DefaultLayout = (props) => {

    return (
        <>
            <Navbar />
            <HeroCarousel />
            {props.children}
            <div className="hidden lg:block">
                <Footer />
            </div>
        </>
    )
};

export default DefaultLayout;