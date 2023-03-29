import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { routes } from "./routes";
import { ProvideAuth } from "./Provider";
import { AuthButton } from "./components/AuthButton";

import { PrivateRoute } from "./components/PrivateRoute";
import { ProtectedPage } from "./components/ProtectedPage";

function App() {
  return (
    <ProvideAuth>
      <Router basename={routes.baseName}>
        <div className="App">
          <nav>
            <ul style={{ display: "flex", gap: "2em", listStyle: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/userssss">Userssss</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/protected">Proctected Page</Link>
              </li>
              <li>
                <Link to="/notexist">notexist</Link>
              </li>
            </ul>
          </nav>

          <AuthButton />

          <hr />

          <Switch>
            {routes.mainRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <PrivateRoute exact path="/protected">
              <ProtectedPage />
            </PrivateRoute>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
