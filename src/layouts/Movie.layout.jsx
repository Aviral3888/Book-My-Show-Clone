import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Component
import MovieNavbar from '../components/Navbar/movienavbar.component';
import Footer from '../components/Footer/Footer.component';

// context
import { MovieContext } from "../context/movie.context";

const MovieLayout = (props) => {

    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    return (
        <>
            <MovieNavbar />
            {props.children}
            <div className="hidden lg:block">
                <Footer />
            </div>
        </>
    )
};

export default MovieLayout;