import React, { useState } from 'react';
import styles from './ImageViewer.module.css';

const ImageViewer = ({ mainUrl }) => {


  return (
    <div className={styles.imageViewer}>
      <img src={process.env.PUBLIC_URL + mainUrl}
        alt="Image" className={styles.image}
      />
    </div>
  );
};

export default ImageViewer