import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByName } from "../http/movieAPI";
import { observer } from 'mobx-react-lite';
import { getGenre, getMovie } from "../http/genresAPI";
import { getRaiting } from "../http/raitingCommentsAPI";

const MoviePage = () => {
    const [movie, setMovie] = useState({info: []});
    const [genres, setGenres] = useState({info: []});
    const [raiting, setRaiting] = useState({});
    const {name} = useParams();

    useEffect(() => {
        getMovieByName(name).then(data => setMovie(data[0]));
        getGenre(1).then(data => console.log(data));
    }, []);

    return (
        <div className="movie">
            <div className="container">
                <div className="movie-content">
                    <img src={process.env.REACT_APP_API_URL + movie.logo} alt='Логотип фильма' className="movie-content__logo" title={movie.name}/>
                    <div className="movie-content-info">
                        <h2 className="movie-content-info__title">{movie.name}</h2>
                        <ul>
                            <li className="movie-content-info__tags">Director: {movie.director}</li>
                            <li className="movie-content-info__tags">Genres: {}</li>
                            <li className="movie-content-info__raiting">Raiting: {}</li>
                        </ul>
                    </div> 
                </div>
                <div className="movie-description">
                    <p className="movie-description__title">Description:</p>
                    <p className="movie-description__text">{movie.description}</p>
                </div>
                <div className="movie-player">
                    <video className="movie-player__player">Тут должен быть фильм</video>
                </div>
                <div className="movie-comments">
                    <p className="movie-comments__title">Comments:</p>
                    <p className="movie-comments__comments">{}</p>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;