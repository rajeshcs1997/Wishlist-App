import './App.css';
import Additems from './components/additems/Additems'
import Showitems from './components/showitems/Showitems'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" style={{color:"white"}}>Add Wishlist</Link>
            </li>
            <li>
              <Link to="/wishlist" style={{color:"white"}}>Show Wishlist</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Additems/>
          </Route>
          <Route exact path="/wishlist">
            <Showitems/>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
