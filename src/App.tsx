import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { routes } from "./routes";

function App() {
  return (
    <Router basename={routes.baseName}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/notexist">notexist</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {routes.mainRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect to={routes.redirectPath} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
