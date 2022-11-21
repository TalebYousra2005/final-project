import React from "react";
import library from "../../images/hero-section.png";
import "./style.css";
export const Hero = () => {
  return (
    <div
      className="container-fluid  hero-section"
      style={{ backgroundImage: `url(${library})` }}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2 d-flex">
          <div>
            <h1 className="hero-title">Welcome to the website</h1>
            <p className="hero-p">Knowledge grows by sharing</p>
          </div>
        </div>
      </div>
    </div>
  );
};
