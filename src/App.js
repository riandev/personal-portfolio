import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Expert from "./components/Expert/Expert";
import Portfolios from "./components/Portfolios/Portfolios";
import Review from "./components/Review/Review";
import Resumes from "./components/Resumes/Resumes";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/expertise'>
          <Expert></Expert>
        </Route>
        <Route path='/portfolio'>
          <Portfolios></Portfolios>
        </Route>
        <Route path='/reviews'>
          <Review></Review>
        </Route>
        <Route path='/resume'>
          <Resumes></Resumes>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
