import React from "react";
import "./ArticleGrid.css"
import Article from "../Article/Article";

export default function ArticleGrid({ title, articles }) {
  const artList = articles.map((art, i) => <Article key={i} data={art} />)

  return (
    <>
      <h2>{`${title.toUpperCase()} ARTICLES`}</h2>
      <div className="container">
        {artList}
      </div>
    </>
  )
}