import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import Color from './components/Color';
function App() {


  return (
    <div className="App">
       <Router>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page/" component={Page} />
        <Route exact path="/color/" component={Color} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
