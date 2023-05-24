import React, { useState } from 'react';
import styles from './ImageViewer.module.css';

const ImageViewer = ({ mainUrl }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`${styles.imageViewer} ${isFullscreen ? styles.fullscreen : ''}`}>
      <img src={process.env.PUBLIC_URL + mainUrl}
        alt="Image" className={styles.image}
        onClick={toggleFullscreen} />
      {isFullscreen && (
        <button className={styles.closeButton} onClick={toggleFullscreen}>
          &#10006;
        </button>
      )}
    </div>
  );
};

export default ImageViewer