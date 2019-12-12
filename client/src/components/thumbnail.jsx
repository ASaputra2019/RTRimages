import React from 'react'
import ThumbImages from './thumbImages.jsx';
import style from "./thumbnail.css";

const ThumbNail = (props) => (
    <div className={style.container} > 
        <img src={props.reviewThumb} onClick={() => props.modal()} width="82" height="180.65" className={style.review}/>      
            {props.count > 0 ?
            <div className={style.thumbPrev} onClick={() => props.upClick()}><span className={style.arrowPrev} ></span></div> : <div className={style.thumbPrev} > </div>}    
            <ThumbImages imagesViewPort={props.imagesViewPort} clickBoi={props.clickBoi} />
            {props.imagesViewPort.length > 3 && (props.imagesViewPort.length - props.count - 2) > props.count ?
            <div onClick={() => props.downClick()} className={style.thumbNext}> <span className={style.arrowNext} ></span></div> : <div className={style.thumbNext} ></div>}
    </div>
)
export default ThumbNail;
