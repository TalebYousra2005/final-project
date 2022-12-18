//* this is the generale design of the card to be used for oth books and cources(hopefully)
import "./style.css";
import { format, render, cancel, register } from "timeago.js";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { _id, type, title, author, price, subject, image, createdAt } = item;
  // console.log(item)
  return (
    <>
      {/* <div
        className="card m-2 "
        style={{ height: "35rem" }}
        onClick={() => {
          if (type === "book") {
            navigate(`/books/${_id}`);
          } else if (type === "cours") {
            navigate(`/courses/${_id}`);
          }
        }}
      >
        <div className="card-body">
          <img
            src={image}
            alt="product-image"
            height={"60%"}
            className="card-img mb-2"
          />
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{price}</p>
          <p className="card-text">{subject}</p>
          {author && <p className="card-text">{author}</p>}
        </div>
      </div> */}

      <div
        className="card"
        style={{ width: "18rem" }}
        onClick={() => {
          if (type === "book") {
            navigate(`/books/${_id}`);
          } else if (type === "cours") {
            navigate(`/courses/${_id}`);
          }
        }}
      >
        <img src={image} className="card-img-top" alt="..." />
        <h5 className="card-title">{title}</h5>
        <div className="card-body">
          <p className="card-text">
            Price : {price} DA
            <br />
            Subject : {subject}
            <br />
            {author && <p className="card-text">Author : {author}</p>}
          </p>
          <p className="card-text">
            <p className="text-muted">
              {format(createdAt)}
            </p>
          </p>
        </div>
      </div>

      {/* <div
        className="card mb-3"
        style={{ height: "300px" }}
        onClick={() => {
          if (type === "book") {
            navigate(`/books/${_id}`);
          } else if (type === "cours") {
            navigate(`/courses/${_id}`);
          }
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="..."
              //  height={"100%"}
              style={{ height: " 100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Price : {price} DA
                <br />
                Subject : {subject}
                <br />
                {author && <p className="card-text">Author : {author}</p>}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {format(Date.now() - createdAt)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
