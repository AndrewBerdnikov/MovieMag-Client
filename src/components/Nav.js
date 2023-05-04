import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ABOUT_ROUTER, ACCAUNT_ROUTER, MAIN_ROUTER, MOVIE_ROUTER } from '../utils/consts';
import { getRandomMovie } from '../http/movieAPI';

const Nav = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getRandomMovie().then(data => setMovie(data));
    }, [])

    const navigate = useNavigate();

    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-content'>
                    <ul>
                        <li onClick={() => navigate(MAIN_ROUTER)}><a>Main page</a></li>
                        <li onClick={() => navigate(MOVIE_ROUTER + '/' + movie.name)}><a>Random movie</a></li>
                        <li onClick={() => navigate(ABOUT_ROUTER)}><a>About us</a></li>
                        <li onClick={() => navigate(ACCAUNT_ROUTER)}><a>Personal accaunt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;