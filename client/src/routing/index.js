import HomePage from "../pages";
import LoginRegisterPage from "../pages/login.register";

export const routes = [
  { id: 1, path: "/", element: HomePage, isPrivate: false, children: [] },
  {
    id: 2,
    path: "auth/sign",
    element: LoginRegisterPage,
    isPrivate: false,
    children: [],
  },
];
