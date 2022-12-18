import React from "react";
import { HomeLayout } from "../components/layouts/home";
import { SignInForm } from "../components/login";
import { useNavigate, useParams } from "react-router-dom";
import library from "../images/hero-section.png";
import { useSelector } from "react-redux";
const HomePage = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const currentUser = useSelector((state) => state.user);
  return (
    <HomeLayout>
      <div className="hero">
        <div
          className="container-fluid  hero-section"
          style={{ backgroundImage: `url(${library})` }}
        >
          <div className="row">
            <div className="col-md-8 offset-md-2 d-flex">
              <div>
                <h1 className="hero-title">Welcome to the website</h1>
                <p className="hero-p">
                  Knowledge grows by sharing
                  <br />
                  Get your book, study hard and ace your exams
                </p>
                {!currentUser && (
                  <button
                    type="button"
                    className="btn btn-warning m-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // {
                    //   localStorage.getItem("token")
                    //     ? navigate(`user/${id}`)
                    //     :
                    // }
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        navigate(`user/${id}`);
                      }
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container-fluid about-section">
          <div className="row">
            <div className="col-md-8 text-center offset-md-2 about-content">
              <h1 className="about-title">About us</h1>
              <p className="about-p">
                On this website you will find students selling their study
                books, we do our best to keep it acadimic and to provide you
                with an organized book store for you to get your books and start
                studying
              </p>
              {!currentUser && (
                <>
                  <button
                    className="btn btn-warning m-3"
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        navigate(`user/${id}`);
                      } else {
                        navigate("/auth/sign");
                      }
                    }}
                  >
                    Join us
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning m-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // {
                    //   localStorage.getItem("token")
                    //     ? navigate(`user/${id}`)
                    //     :
                    // }
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        navigate("/user/" + id);
                      }
                    }}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <SignInForm />
    </HomeLayout>
  );
};

export default HomePage;
