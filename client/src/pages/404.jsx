import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container fluid error-container">
      <div className="col-md-6 p-5 error-col" style={{ margin: "90px auto" }}>
        <div className="card shadow border-0 p-5">
          <div className="card-body">
            <h3 className="card-title">Not found page</h3>
            <p className="card-text">Return to home page</p>
            <Link to="/">click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;