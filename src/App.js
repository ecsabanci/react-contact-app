import "./styles.css";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
// import User from "./components/User";
import Error404 from "./components/Error404";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  activeStyle={{ backgroundColor: "black", color: "#fff" }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "black", color: "#fff" }}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ backgroundColor: "black", color: "#fff" }}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/users" component={Users}></Route>
            {/* <Route path="/user/:id" component={User}></Route> */}
            <Route path="*" component={Error404}></Route>
          </Switch>
        </div>
      </Router>
      <div className="App">
        <Contact />
      </div>{" "}
    </div>
  );
}
