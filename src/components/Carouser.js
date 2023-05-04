import React from 'react';
import img from '../images/Drive2011Poster.jpg';

const Carousel = () => {
    const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    const slideRight = () => {
        let carousel = document.getElementById('carousel');
        carousel.scrollLeft = carousel.scrollLeft + 250;
    }

    const slideLeft = () => {
        let carousel = document.getElementById('carousel');
        carousel.scrollLeft = carousel.scrollLeft - 250;
    }
    return (
        <div className='carousel'>
            <div className='container'>
                <div className='carousel-container'>
                    <div className='carousel-left-button' onClick={slideLeft}>{'<'}</div>
                    <div className='carousel-content' id='carousel'>
                       {slides.map((slide, index) => {
                            return (
                                <div key={index} className='carousel-card'>
                                    <div className='carousel-image'><img src={img} alt='Картинка фильма'/></div>
                                </div>
                            )
                       })}
                    </div>
                    <div className='carousel-right-button' onClick={slideRight}>{'>'}</div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;