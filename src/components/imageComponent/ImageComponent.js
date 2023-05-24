import React, { useState } from 'react';

import styles from './ImageComponent.module.css'


const ImageComponent = ({ mainUrl }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div>
            {!isFullScreen && (
                <img
                    src={process.env.PUBLIC_URL + mainUrl}
                    alt="Image"
                    onClick={toggleFullScreen}
                    className={styles.furniture__image}
                />
            )}

            {isFullScreen && (
                <div
                    style={{
                        'position': 'fixed',
                        'top': '20px',
                        'left': '-240px',
                        'width': '95%',
                        'height': '90%',
                        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
                        'display': 'flex',
                        'alignItems': 'flex-start',
                        'justifyContent': 'flex-end',
                    }}
                >
                    <div
                        style={{
                            'margin': '10px',
                            'cursor': 'pointer',
                            'fontSize': '24px',
                            'color': '#fff',
                        }}
                        onClick={toggleFullScreen}
                    >
                        <div style={{
                            'position': 'absolute',
                            'right': '10px',

                            'color': 'black',
                            'fontWeight': '700',
                            'fontSize': '22px'
                        }}
                        >&#x2715;</div> {/* Відображення символу "хрестик" */}
                    </div>

                    <img
                        src={process.env.PUBLIC_URL + mainUrl}
                        alt="Image"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageComponent;