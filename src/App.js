import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/nomatch">NotFound</Link></li>
            </ul>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
