//* this is the generale design of the card to be used for oth books and cources(hopefully)
import "./style.css";
import { format, render, cancel, register } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import httpCommun from "../../http.commun";
import { setUseProxies } from "immer";
import { useState } from "react";
export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const {
    _id,
    type,
    title,
    author,
    price,
    subject,
    image,
    ownerId,
    createdAt,
  } = item;

  useEffect(() => {
    httpCommun.get(`users/${ownerId}`).then((res) => {
      if (res.status === 200) {
        setUser(res.data?.data);
      }
    });
  });
  return (
    <div
      className="product-card"
      style={{ width: "20rem" }}
      onClick={() => {
        if (type === "book") {
          navigate(`/books/${_id}`);
        } else if (type === "cours") {
          navigate(`/courses/${_id}`);
        }
      }}
    >
      <img src={image} className="img-fluid" />
      <div className="text-container">
        <h3 className="card-title">{title}</h3>
        <div className="card-body">
          <p className="card-text">
            Price : {price} DA
            <br />
            Subject : {subject}
            <br />
            {author && <p className="card-text"> Author : {author}</p>}
            <br />
            By : {user?.userName}
          </p>

          <p className="text-muted card-text">{format(createdAt)}</p>
        </div>
      </div>
    </div>
  );
};
