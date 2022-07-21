import './App.css';
import Home from './components/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import Landing from './components/LandigPages/Landind';
import Recipes from './components/forms/Recipes';
import Error404 from './components/Error/Error404';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route path="/newrecipe" exact render={() => <Recipes />} />
        <Route path="/Home" component={Home} />
        <Route path="/404" component={Error404} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
