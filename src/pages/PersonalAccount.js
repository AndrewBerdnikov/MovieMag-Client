import React, { useContext } from 'react';
import {Context} from '../index';
import img from '../images/Drive2011Poster.jpg';

const PersonalAccaunt = () => {
    const {user} = useContext(Context);
    return (
        <div className='accaunt'>
            <div className='container'>
                <div className='accaunt-content'>
                    <div className='accaunt-info'>
                        <img className='accaunt-info__img' src={img} alt='Аватарка'></img>
                        <div className='accaunt-info-text'>
                            <h2 className='accaunt-info-text__name'>Petia2003</h2>
                            <p className='accaunt-info-text__role'>Role:</p>
                        </div>
                    </div>
                    <div className='accaunt-favorites'>
                        <p className='accaunt-favorites__title'>Favorites</p>
                        <div className='accaunt-favorites__movie'>
                            123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccaunt;