import HomePage from "../pages";
import SigninSignupPage from "../pages/signin.signup";

export const routes = [
  { id: 1, path: "/", element: HomePage, isPrivate: false, children: [] },
  {
    id: 2,
    path: "auth/sign",
    element: SigninSignupPage,
    isPrivate: false,
    children: [],
  },
];
