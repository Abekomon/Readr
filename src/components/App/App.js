import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ArticleGrid from '../ArticleGrid/ArticleGrid';
import Nav from '../Nav/Nav';
import fetchArticles from '../../apiCalls';
import Loader from '../ArticleGrid/Loader';

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [curValue, setCurValue] = useState('home')
  const fetchData = (filter) => {
    setAllArticles([])
    fetchArticles(filter).then(data => setAllArticles(data.results)) 
  }

  console.log(allArticles)
  return (
    <>
      <h1 className="logo">Readr</h1>
      <Nav 
        curValue={curValue}
        setCurValue={setCurValue} 
        fetchData={fetchData} 
      />
      <Switch>
        <Route exact path="/" render={() => (
            !allArticles.length ? <Loader /> :
            <ArticleGrid title={curValue} articles={allArticles} />
          )}/>
        <Route exact path='/error' render={() => (
            <h3>Something went wrong!</h3>
          )} 
        />
      </Switch>
    </>
  );
}

export default App;