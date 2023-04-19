import React from "react";
import "./Article.css"

export default function Article({ data }) {
  const { title, short_url, multimedia } = data
  let url = '', altText = 'No image available'
  if(multimedia) { url = multimedia[1].url; altText = title }
  return (
    <a className='card-link' href={short_url}>
      <div className="card">
        <img src={url} alt={altText} />
        <p>{title}</p>
      </div>
    </a>
  )
}