import React from 'react';

const DeleteMovie = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h2 className='modal-content__title'>Удалить фильм</h2>
                <hr/>
                <form className='modal-content__form'>
                    <input type='text' placeholder='Введите название фильма' className='modal-content-form__input'></input>
                    <hr/>
                    <button className='modal-content-form__button'>Удалить фильм</button>
                </form>
            </div>
        </div>
    );
}

export default DeleteMovie;