import './App.css';
import Home from './components/Home/Home';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Landing from './components/LandigPages/Landind';
import Recipes from './components/forms/Recipes';
import Details from './components/recipeDetail/Details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route path="/Home" component={Home} />
        <Route path="/newrecipe" exact render={() => <Recipes />} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
