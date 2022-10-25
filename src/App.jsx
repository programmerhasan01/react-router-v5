import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Posts from "./components/Posts";
import Services from "./components/Services";

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services">
            <Services number="5" />
          </Route>
          <Route
            exact
            path="/about"
            render={() => <About text="AboutText" />}
          />
          <Route exact path="/posts/:category/:topic" component={Posts} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
