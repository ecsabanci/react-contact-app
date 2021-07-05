import { useEffect, useState } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";

import User from "./User";

const Users = () => {
  let { path, url } = useRouteMatch();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <div> Loading... </div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              activeStyle={{ backgroundColor: "black", color: "#fff" }}
              to={`${url}/${user.id}`}
            >
              {" "}
              {user.name}{" "}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>
          {/* <Topic /> */}
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
