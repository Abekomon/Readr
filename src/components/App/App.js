import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';
import ArticleGrid from '../ArticleGrid/ArticleGrid';
import Nav from '../Nav/Nav';
import fetchArticles from '../../apiCalls';
import Loader from '../Misc/Loader';

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [curValue, setCurValue] = useState('home')
  const fetchData = (filter) => {
    if(allArticles.length) { setAllArticles([]) }
    fetchArticles(filter).then(data => 
      setAllArticles(data.results.filter(art => art.title))
    ) 
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
        <Route render={() => (
            <div className="error">
              <Link to="/" className="home-link">{'<< Back to home'}</Link>
              <h3>Oops, we can't seem to find that!</h3>
            </div>
          )} 
        />
      </Switch>
    </>
  );
}

export default App;