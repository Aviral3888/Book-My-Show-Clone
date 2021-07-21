import React from 'react';

import { NextArrow, PrevArrow } from './Arrows.component';

// React Slick
import HeroSlider from "react-slick";


const HeroCarousel = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const settings = {
        arrows: true,
        // centerMode: true,
        centerPadding: "200px",
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const images = [
        "https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1587986100063-d1c34ca3dc6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vdmllfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1464855499786-2839659d9e5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        "https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1483101974978-cf266fdf1139?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    ];
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-44 md:h-80 py-3 ">
                            <img
                                src={image}
                                alt="Carousel images"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-80 px-2 py-3 ">
                            <img
                                src={image}
                                alt="Carousel images"
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    )
};

export default HeroCarousel;