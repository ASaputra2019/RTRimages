import React from 'react';
import style from "./thumbImages.css";
import ThumbImagesEntry from './ThumbImagesEntry.jsx'

const ThumbImages = (props) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      {props.imagesViewPort.map((image, index) => (
        <ThumbImagesEntry key={index} index={index} image={image} clickBoi={props.clickBoi}/>
      ))}
    </div>  
  </div>
);

export default ThumbImages;