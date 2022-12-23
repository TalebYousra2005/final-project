import HomePage from "../pages";
import ContactPage from "../pages/contact";
import ignupPage from "../pages/auth/signup";
import BooksPage from "../pages/books";
import BookDetailsPage from "../pages/books/details";
import { UserPageLayout } from "../components/layouts/user";
import AddBookPage from "../pages/private/books/addBook";
import EditBookPage from "../pages/private/books/editBook";
import UserHomePage from "../pages/private";
import UserBooksPage from "../pages/private/books";
import NotFoundPage from "../pages/404.jsx";
import UserOrdersPage from "../pages/private/orders";
import DocumentsPage from "../pages/documents";

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
    element: ignupPage,
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
    path: "documents",
    element: DocumentsPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 7,
    path: "documents/:id",
    element: BooksPage,
    isPrivate: false,
    children: [],
  },
  {
    id: 8,
    path: "/user/:id",
    element: UserPageLayout,
    isPrivate: true,
    children: [
      { id: 1, path: "", element: UserHomePage },
      { id: 2, path: "books", element: UserBooksPage },
      { id: 3, path: "books/create", element: AddBookPage },
      { id: 4, path: "books/edit/:id", element: EditBookPage },
      { id: 5, path: "orders", element: UserOrdersPage },
    ],
  },
  {
    id: 50,
    path: "*",
    element: NotFoundPage,
    isPrivate: false,
    children: [],
  },
];
