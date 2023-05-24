import React, { useState } from 'react';

import styles from './Slider.module.css'


const Slider = (props) => {
    const images = props.additionalphotosURLs
    const [currentImage, setCurrentImage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleClickImage = (index) => {
        setCurrentImage(index);
        setIsFullscreen(true);
    };

    const handleClickPrevious = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleClickNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <div className={styles.slider}>
            <img
                className={styles.mainImage}
                src={process.env.PUBLIC_URL + images[currentImage]}
                alt="Main"
                onClick={() => handleClickImage(currentImage)}
            />
            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`${styles.thumbnail} ${index === currentImage ? styles.active : ''}`}
                        src={process.env.PUBLIC_URL + image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleClickImage(index)}
                    />
                ))}
            </div>
            <button className={styles.previousButton} onClick={handleClickPrevious}>
                &lt;
            </button>
            <button className={styles.nextButton} onClick={handleClickNext}>
                &gt;
            </button>

            {isFullscreen && (
                <div className={styles.fullscreenSlider}>
                    <button className={styles.closeButton} onClick={handleCloseFullscreen}>
                        X
                    </button>
                    <img
                        className={styles.fullscreenImage}
                        src={process.env.PUBLIC_URL + images[currentImage]}
                        alt="Fullscreen"
                        onClick={handleClickNext}
                    />
                    <button className={styles.previousButtonBIG} onClick={handleClickPrevious}>
                        &lt;
                    </button>
                    <button className={styles.nextButtonBIG} onClick={handleClickNext}>
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

export default Slider;