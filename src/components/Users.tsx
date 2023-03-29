import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export function Users() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>
        Users {url} {path}
      </h2>

      <ul>
        <li>
          <Link to={`${url}/all`}>user all</Link>
        </li>
        <li>
          <Link to={`${url}/pass`}>user passed</Link>
        </li>
        <li>
          <Link to={`${url}/deny`}>user denied</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/users/all">
          <User id="all" />
        </Route>
        <Route path={`${path}/pass`}>
          <User id="passed" />
        </Route>
        <Route path="/users/deny">
          <User id="denied" />
        </Route>
      </Switch>
    </div>
  );
}

function User({ id }: { id: string }) {
  return <div>user {id}</div>;
}
