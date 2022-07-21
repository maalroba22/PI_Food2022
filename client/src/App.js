import './App.css';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import Landing from './components/LandigPages/Landind';
import Recipes from './components/forms/Recipes';
function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Landing />} />
      <Route path="/newrecipe" exact render={() => <Recipes />} />
      <Route path="/Home" component={Home} />
    </div>
  );
}

export default App;
