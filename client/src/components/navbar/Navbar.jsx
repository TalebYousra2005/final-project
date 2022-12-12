import { Link } from "react-router-dom";
import { Compare } from "../../helper/compareUrl";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import currentUser from "../../redux/reducers/currentUser";
export const Navbar = () => {
  
  const currentUser = localStorage.getItem("token");
  console.log(currentUser);
  // !const dispatch = useDispatch();
  // !const currentUser = dispatch(currentUser);
  // !console.log(currentUser)
  const path = useLocation();
  return (
    <nav className="navbar navbar-expand-lg sticky-top p-0 px-3 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 app-name">
          <img
            className="img-fluid me-2"
            src="img/icon-1.png"
            alt="."
            style={{ width: 45 }}
          />
          UNI Shop
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav nav mx-5 py-3 py-lg-0">
          <p
            className={
              Compare("/", path.pathname) ? "mb-0 p-3 active" : "mb-0 p-3"
            }
          >
            <Link to="/" className="nav-item nav-link ">
              Home
            </Link>
          </p>
          <p
            className={
              Compare("/cources", path.pathname)
                ? "mb-0 p-3 active"
                : "mb-0 p-3"
            }
          >
            <Link to="/cources" className="nav-item nav-link">
              Cources
            </Link>
          </p>
          <p
            className={
              Compare("/books", path.pathname) ? "mb-0 p-3 active" : "mb-0 p-3"
            }
          >
            <Link to="/books" className="nav-item nav-link">
              Books
            </Link>
          </p>
          <p
            className={
              Compare("/contact", path.pathname)
                ? "mb-0 p-3 active"
                : "mb-0 p-3"
            }
          >
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </p>

          {currentUser ? (
            <p>{currentUser.firstName}</p>
          ) : (
            <p
              className={
                Compare("/auth/sign", path.pathname)
                  ? "mb-0 p-3 active"
                  : "mb-0 p-3"
              }
            >
              <Link to="/auth/sign" className="nav-item nav-link">
                Sign in/up
              </Link>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};
