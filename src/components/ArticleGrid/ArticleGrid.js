import React from "react";
import Article from "../Article/Article";

export default function ArticleGrid({ articles }) {
  const artList = articles.map((art, i) => <Article key={i} data={art} />)

  return (
    <div className="container">
      {artList}
    </div>
  )
}