import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTER, MAIN_ROUTER, REGISTRATION_ROUTER } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import {Context} from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTER;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async() => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(name, password, email);
                navigate(LOGIN_ROUTER);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(MAIN_ROUTER);
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <div>
            <main className='auth'>
                <div className='container'>
                    <div className='auth-form'>
                        <h2 className='auth-form__title'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                        <form>
                            {!isLogin ?  <input type='text' placeholder='Name....' className='auth-form__input' value={name} onChange={e => setName(e.target.value)}/> : ''}
                            <input type='email' placeholder='Email....' className='auth-form__input' value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type='password' placeholder='Password....' className='auth-form__input' value={password} onChange={e => setPassword(e.target.value)}/>
                            <div className='row'>
                                {
                                    isLogin ?  
                                    <div className='auth-form-text'>
                                        <span>No account?</span> <NavLink to={REGISTRATION_ROUTER} className='auth-form-text__link'>Register!</NavLink>
                                    </div> : 
                                    <div className='auth-form-text'>
                                        <span>Have an account?</span> <NavLink to={LOGIN_ROUTER} className='auth-form-text__link'>Log In!</NavLink>
                                    </div>
                                }
                                <button className='auth-form__button' onClick={click}>{isLogin ? 'Enter' : 'Registration'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
});

export default Auth;