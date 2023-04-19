import React from "react";
import "./Article.css"

export default function Article({ data }) {
  const { title, short_url, multimedia } = data
  let url = '', altText = 'No image available'
  if(multimedia) { url = multimedia[1].url; altText = title }
  return (
    <div className='card'>
      <button className='details-button'>See Article Details</button>
      <a className='card-link' href={short_url}>
        <img src={url} alt={altText} />
        <p>{title}</p>
      </a>
    </div>
  )
}