import React from 'react';
import style from "./thumbImagesEntry.css";

const ThumbImagesEntry = (props) => (
  <a className={style.container} id={`image${props.index}`}>
    <img src={props.image} width="85" height="127.73"  onClick={() => props.clickBoi(props.image)}/>
  </a>
);

export default ThumbImagesEntry;