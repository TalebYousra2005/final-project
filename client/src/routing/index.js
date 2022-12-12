import HomePage from "../pages";
import ContactPage from "../pages/contact";
import SigninSignupPage from "../pages/auth/signin.signup";
import BooksPage from "../pages/books";
import BookDetailsPage from "../pages/books/details";
import { UserPageLayout } from "../components/layouts/user";
import AddBookPage from "../pages/private/books/addBook";
import EditBookPage from "../pages/private/books/editBook";
import UserHomePage from "../pages/private";

export const routes = [
  { id: 1, path: "/", element: HomePage, isPrivate: false, children: [] },
  {
    id: 2,
    path: "contact",
    element: ContactPage,
    isPrivate: false,
    cildren: [],
  },
  {
    id: 3,
    path: "auth/sign",
    element: SigninSignupPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 4,
    path: "books",
    element: BooksPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 5,
    path: "books/:id",
    element: BookDetailsPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 6,
    path: "/user/:id",
    element: UserPageLayout,
    isPrivate: true,
    children: [
      { id: 1, path: "", element: UserHomePage },
      { id: 2, path: "books/create", element: AddBookPage },
      { id: 3, path: "books/edit/:id", element: EditBookPage },
    ],
  },
];
