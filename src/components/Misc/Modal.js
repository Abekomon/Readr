import React from "react";
import "./Modal.css"

export default function Modal({isOpen, data, updateModal}) {
  const styles = isOpen ? 'modal' : 'modal hidden'
  const {title, abstract, published_date, byline, short_url, multimedia} = data
  let imgUrl = '', altText = 'No image available'
  if(multimedia) { imgUrl = multimedia[1].url; altText = title }

  return (
    <div className={styles}>
      <div className="modal-info">
        <button className="exit-button" onClick={() => updateModal({}, false)}>x</button>
        <img src={imgUrl} alt={title} />
        <p>{title}</p>
        <p>{abstract}</p>
        <p>{byline}</p>
        <a href={short_url}>{"See Full Article >>"}</a>
      </div>
    </div>
  )

}