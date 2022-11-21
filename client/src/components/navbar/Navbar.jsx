import { Link } from "react-router-dom";
export const Navbar = () => {
  // var myNav = document.getElementById("nav");
  // window.onscroll = function () {
  //   if (window.scrollY >= 2) {
  //     myNav.classList.add("navbar-dark");
  //     myNav.classList.remove("navbar-light");
  //   } else {
  //     myNav.classList.add("navbar-light");
  //     myNav.classList.remove("navbar-dark");
  //   }
  // };
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-3 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 app-name">
          <img
            className="img-fluid me-2"
            src="img/icon-1.png"
            alt="."
            style={{ width: 45 }}
          />
          My app name
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
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/cources" className="nav-item nav-link">
            Cources
          </Link>
          <Link to="/books" className="nav-item nav-link">
            Books
          </Link>
          <Link to="/auth/sign" className="nav-item nav-link">
            Sign in/up
          </Link>

          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
