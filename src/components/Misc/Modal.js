import React from "react";
import "./Modal.css"
const dayjs = require('dayjs')

export default function Modal({isOpen, data, updateModal}) {
  const styles = isOpen ? 'modal' : 'modal hidden'
  const {title, abstract, published_date, byline, short_url, multimedia} = data
  let imgUrl = '', altText = 'No image available'
  if(multimedia) { imgUrl = multimedia[1].url; altText = title }

  return (
    <div className={styles}>
      <div className="modal-info">
        <button className="exit-button" onClick={() => updateModal({}, false)}>x</button>
        <img src={imgUrl} alt={altText} />
        <h3>{title}</h3>
        <p>{abstract}</p>
        <div className="info-box">
          <p>{byline}</p>
          <p>{`Published at ${dayjs(published_date).format('h A, MMM DD (EST)')}`}</p>
        </div>
        <a href={short_url}>{"See Full Article >>"}</a>
      </div>
    </div>
  )

}