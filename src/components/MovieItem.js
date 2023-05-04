import React from 'react';
import img from '../images/Drive2011Poster.jpg';
import { useNavigate } from 'react-router-dom';
import { MOVIE_ROUTER } from '../utils/consts';

const MovieItem = ({movie}) => {
    const navigate = useNavigate();
    
    return (
        <div className='main-movies__card' onClick={() => navigate(MOVIE_ROUTER + '/' + movie.name)}>
            <img src={process.env.REACT_APP_API_URL + movie.logo} alt='Картинка фильма' title={movie.name}/>
        </div>
    );
}

export default MovieItem;