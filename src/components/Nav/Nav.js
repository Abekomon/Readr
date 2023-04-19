import React from "react";
import Category from "./Category";
import "./Nav.css"
import { useEffect } from "react";

export default function Nav({curValue, setCurValue, fetchData}) { 
  const categories = ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "opinion", "politics", "science", "sports", "technology", "theater", "travel", "upshot", "us", "world"]
  const catList = categories.map(cat => <Category key={cat} name={cat} />)
  const handleChange = (e) => {
    setCurValue(e.target.value)
  }

  useEffect(() => {
    fetchData(curValue)
  }, [curValue])

  return (
    <nav>
      <select
        value={curValue}
        onChange={(e) => handleChange(e)}
      >
        <option value={''} disabled>Filter by article topic</option>
        {catList}
      </select>
    </nav>
  )
}