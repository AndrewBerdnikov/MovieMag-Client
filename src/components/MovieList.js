import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Context} from  '../index';
import MovieItem from './MovieItem';
import { getAllMovie } from '../http/movieAPI';

const MovieList = observer(() => {
    const {movie} = useContext(Context);

    useEffect(() => {
        getAllMovie().then(data => movie.setMovies(data));
    }, []);

    return (
        <div className='main-movies'>
            {movie.movie.map((movie) => {
                return <MovieItem key={movie.id} movie={movie}/>
            })}
        </div>
    );
});

export default MovieList;