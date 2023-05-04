import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';

const GenresBar = observer(() => {
    const {movie} = useContext(Context);
    return(
        <aside className='main-genres'>
            <p className='main-genres__title'>
                Genres
            </p>
            <ul className='main-genres__list'>
                <li className='main-genres__genre one'><a>Action movies</a></li>
                <li className='main-genres__genre two'><a>Detective movies</a></li>
                <li className='main-genres__genre one'><a>Drama movies</a></li>
                <li className='main-genres__genre two'><a>Comedy movies</a></li>
                <li className='main-genres__genre one'><a>Adventures movies</a></li>
                <li className='main-genres__genre two'><a>Horrors movies</a></li>
                <li className='main-genres__genre one'><a>Fantasy movies</a></li>
                <li className='main-genres__genre two'><a>Child movies</a></li>
            </ul>
        </aside>
    );
});

export default GenresBar;