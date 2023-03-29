import { Home } from "./components/Home";
import { About } from "./components/About";
import { Users } from "./components/Users";

export const routes = {
  baseName: "/rrt",

  redirectPath: "/",
  mainRoutes: [
    {
      name: "Home",
      path: "/",
      component: Home,
      exact: true,
    },
    {
      name: "About",
      path: "/about",
      component: About,
      exact: true,
    },
    {
      name: "Users",
      path: "/users",
      component: Users,
      exact: true,
    },
  ],
  userRoutes: [],
};
