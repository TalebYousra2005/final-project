import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
export const About = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="container-fluid about-section">
      <div className="row">
        <div className="col-md-8 text-center offset-md-2 about-content">
          <h1 className="about-title">About us</h1>
          <p className="about-p">
            On this website you will find students selling their study books, we
            do our best to keep it acadimic and to provide you with an organized
            book store for you to get your books and start studying
          </p>
          <button
            className="btn btn-warning"
            onClick={() => navigate("/auth/sign")}
          >
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};
