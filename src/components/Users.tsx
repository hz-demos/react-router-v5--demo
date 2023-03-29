import { Switch, Route, Link } from "react-router-dom";

export function Users() {
  return (
    <div>
      <h2>Users</h2>

      <ul>
        <li>
          <Link to="/users/1">user 1</Link>
        </li>
        <li>
          <Link to="/users/2">user 2</Link>
        </li>
        <li>
          <Link to="/users/3">user 3</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/users/1">
          <User id="1" />
        </Route>
        <Route path="/users/2">
          <User id="2" />
        </Route>
        <Route path="/users/3">
          <User id="3" />
        </Route>
      </Switch>
    </div>
  );
}

function User({ id }: { id: string }) {
  return <div>user {id}</div>;
}
