import React from "react";
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import fetchArticles from "../../apiCalls";

export default function ArticleGrid({filters}) {
  const [allArticles, setAllArticles] = useState([])
  
  useEffect(() => {
    fetchArticles(filters).then(data => setAllArticles(data.results)) 
  }, [])
  
  console.log(allArticles)

  return (
    <div className="container">
      <Nav />
      <div className="article-container">
        <h2>Hi!</h2>
      </div>
    </div>
  )
}