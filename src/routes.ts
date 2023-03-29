import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Topics } from "./components/Topics";
import { LoginPage } from "./components/LoginPage";

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
      name: "Users",
      path: "/users",
      component: Users,
      exact: false,
    },
    {
      name: "Topics",
      path: "/topics",
      component: Topics,
      exact: false,
    },
    {
      name: "Login",
      path: "/login",
      component: LoginPage,
      exact: true,
    },
  ],
  userRoutes: [],
};
