import React, { useContext } from 'react';
import logo from '../images/pngegg.png';
import {useNavigate} from 'react-router-dom';
import { ADMIN_ROUTER, LOGIN_ROUTER, MAIN_ROUTER } from '../utils/consts';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';

const Header = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }

    return(
        <header className='header'>
        <div className='container'>
            <div className='header-content'>
                <div className='header-title' onClick={() => navigate(MAIN_ROUTER)}>
                    <img  src={logo} alt='MovieMag' className='header-title__logo'/>
                    <div className='header-title-wrapper'>
                        <h1 className='header-title__title'>MovieMag</h1>
                         <p className='header-title__subtitle'>online movies</p>
                    </div>
                </div>
                { user.isAuth ?
                    <div className='header-input'>
                        <button className='header-input__buttons' onClick={() => navigate(ADMIN_ROUTER)}>Admin panel</button>
                        <button className='header-input__buttons' onClick={() => logOut()}>Logout</button>
                        <input type='search' className='header-input__input' placeholder='Search movies....'/>
                    </div>
                    :
                    <div className='header-input'>
                        <button className='header-input__buttons' onClick={() => navigate(LOGIN_ROUTER)}>Login</button>
                        <input type='search' className='header-input__input' placeholder='Search movies....'/>
                    </div>
                }
                {/* <div className='header-input'>
                    <button className='header-input__buttons' onClick={() => navigate(ADMIN_ROUTER)}>Admin panel</button>
                    <button className='header-input__buttons' onClick={() => navigate(LOGIN_ROUTER)}>Logout</button>
                    <input type='search' className='header-input__input' placeholder='Search movies....'/>
                </div> */}
            </div>
        </div>
        </header>
    )
});

export default Header;