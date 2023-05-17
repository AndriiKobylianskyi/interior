import React, { useState } from 'react';

import styles from './Slider.module.css'

const Slider = (props) => {
    const images = props.additionalphotosURLs
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };




    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                <img src={process.env.PUBLIC_URL + images[currentSlide]}
                    alt="Slide"
                    className={styles.slide} />

                <div
                    className={styles.arrow + ' ' + styles.arrowLeft}
                    onClick={handlePrevSlide}>
                    {/* Стрілка вліво */}
                    &lt;
                </div>
                <div
                    className={styles.arrow + ' ' + styles.arrowRight}
                    onClick={handleNextSlide}>
                    {/* Стрілка вправо */}
                    &gt;
                </div>
            </div>

            <div className={styles.thumbnailContainer}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={process.env.PUBLIC_URL + image}
                        alt={`Thumbnail ${index}`}
                        className={styles.thumbnail}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;