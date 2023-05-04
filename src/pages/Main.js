import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Carousel from '../components/Carouser';
import img from '../images/Drive2011Poster.jpg';
import GenresBar from '../components/GenresBar';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Main = () => {
    const movies = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <div>
            <Nav />
            <Carousel />
            <main className='main'>
                <div className='container'>
                    <div className='main-content'>
                    <div className='main-movie'>
                        <p className='main-movie__title'>
                            All movies
                        </p>
                        <MovieList />
                    </div>
                    <GenresBar />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Main;