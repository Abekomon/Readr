import './App.css';
import { Route, Switch } from 'react-router-dom';
import ArticleGrid from '../ArticleGrid/ArticleGrid';

function App() {
  return (
    <>
      <header>

      </header>
      <Switch>
        <Route exact path="/" component={ArticleGrid}/>
        <Route exact path="/:filters" render={({match}) => (
            <ArticleGrid filters={match.params.filters} />
          )}
        />
        <Route exact path='/error' render={() => (
            <h3>Something went wrong!</h3>
          )} 
        />
      </Switch>
    </>
  );
}

export default App;
