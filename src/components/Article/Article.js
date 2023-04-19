import React from "react";
import "./Article.css"

export default function Article({ data }) {
  const { title } = data
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  )
}