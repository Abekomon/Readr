import React from "react";
import "./ArticleGrid.css"
import Article from "../Article/Article";
import Modal from "../Misc/Modal";
import { useState } from "react";

export default function ArticleGrid({ title, articles }) {
  const [isOpen, setIsOpen] = useState(false)
  const [curArticle, setCurArticle] = useState({})
  const updateModal = (data, modalState) => {
    setCurArticle(data)
    setIsOpen(modalState)
  }

  const artList = articles.map((art, i) => <Article key={i} data={art} updateModal={updateModal} />)

  return (
    <>
      <Modal
        isOpen={isOpen}
        data={curArticle}
        updateModal={updateModal}
      />
      <h2>{`${title.toUpperCase()} ARTICLES`}</h2>
      <div className="container">
        {artList}
      </div>
    </>
  )
}