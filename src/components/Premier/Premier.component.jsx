import React from 'react'
import Slider from 'react-slick';

// Component
import Poster from '../Poster/poster.component';

const Premier = () => {

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinity: true,
                },
            }, {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinity: true,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "Justice League",
            title: "Justice League",
            subtitle: "English"
        },
    ]

    return (
        <>
            <Slider {...settings} >
                {PremierImages.map((image) =>
                    <Poster {...image} />
                )}
            </Slider>
        </>
    )
}

export default Premier;

