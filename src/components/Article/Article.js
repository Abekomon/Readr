import React from "react";
import "./Article.css"

export default function Article({ data, updateModal}) {
  const { title, multimedia } = data
  let url = '', altText = 'No image available'
  if(multimedia) { url = multimedia[1].url; altText = title }
  return (
    <div className='card'>
      <div className='card-link' onClick={() => updateModal(data, true)}>
        <img src={url} alt={altText} />
        <p>{title}</p>
      </div>
    </div>
  )
}