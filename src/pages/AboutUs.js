import React from 'react';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='container'>
                <div className='about-us-form'>
                    <h2 className='about-us-form__title'>About us</h2>
                    <p className='about-us-form__text'>
                        На нашем сайте вы сможете абсолютно бесплатно смотреть новинки из мира кино!
                    </p>
                    <p className='about-us-form__text'>Сайт был создан начинающим программистом Андреем Бердниковым в качестве учебного проекта.</p>
                    <p className='about-us-form__text'>Так что если есть какие нибудь косяки просьба сильно не злиться :{')'}</p>
                    <p className='about-us-form__text'>Мой гитхаб: <a>qdwqdqw</a></p>
                    <p className='about-us-form__text'>Мой тг: <a>qdqfwqfqw</a></p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;