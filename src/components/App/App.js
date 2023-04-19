import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleGrid from '../ArticleGrid/ArticleGrid';
import Nav from '../Nav/Nav';
import fetchArticles from '../../apiCalls';
import Loader from '../ArticleGrid/Loader';

function App() {
  const [allArticles, setAllArticles] = useState([])
  const fetchData = (filter) => {
    fetchArticles(filter).then(data => setAllArticles(data.results)) 
  }

  console.log(allArticles)
  return (
    <>
      <header>

      </header>
      <Nav fetchData={fetchData} />
      <Switch>
        <Route exact path="/" render={() => {
              return !allArticles.length ? <Loader /> :
              <ArticleGrid articles={allArticles} />
            }}/>
        <Route exact path='/error' render={() => (
            <h3>Something went wrong!</h3>
          )} 
        />
      </Switch>
    </>
  );
}

export default App;
