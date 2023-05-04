import React, { useContext, useState } from 'react';
import {Context} from '../../index';
import { createMovie } from '../../http/movieAPI';

const AddMovie = ({active, setActive}) => {
    const {movie} = useContext(Context);
    const [name, setName] = useState();
    const [logo, setLogo] = useState(null);
    const [generated, setGenerated] = useState();
    const [genres, setGenres] = useState();
    const [director, setDirector] = useState();
    const [description, setDescription] = useState();

    const addMovie = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('logo', logo);
        formData.append('generated', generated);
        formData.append('director', director);
        formData.append('description', description);
        createMovie(formData).then(data => console.log(data));
    }

    const selectFile = e => {
        setLogo(e.target.files[0]);
    }
    
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h2 className='modal-content__title'>Добавить фильм</h2>
                <hr/>
                <form className='modal-content__form' onSubmit={addMovie} >
                    <input type='text' placeholder='Название' className='modal-content-form__input' value={name} onChange={e => setName(e.target.value)}></input>
                    <input type='file' className='modal-content-form__button' placeholder='Постер' onChange={selectFile}/>
                    <input type='date' placeholder='Дата создания' className='modal-content-form__input' value={generated} onChange={e => setGenerated(e.target.value)}></input>
                    <select multiple name='genres' className='modal-content-form__select'>
                        <option disabled>Выбирете жанры</option>
                        {movie.genres.map((option, id) => {
                            return <option key={id}>{option.genre}</option>
                        })}
                    </select>
                    <input type='text' placeholder='Режисер' className='modal-content-form__input' value={director} onChange={e => setDirector(e.target.value)}></input>
                    <input type='text' placeholder='Описание' className='modal-content-form__input' value={description} onChange={e => setDescription(e.target.value)}></input>
                    <hr/>
                    <button type='submit' className='modal-content-form__button add'>Довавить</button>
                </form>
            </div> 
        </div>
    );
}

export default AddMovie;