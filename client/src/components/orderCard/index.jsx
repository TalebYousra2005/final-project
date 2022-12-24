import { useState } from "react";
import { useEffect } from "react";
import httpCommun from "../../http.commun";
import { formatDate } from "../../helper/formateDate";
import { deleteOneOrder } from "../../services/order.service";
import "./style.css"
export const OrderCard = ({ productId, clientId, orderId }) => {
  const [client, setClient] = useState(null);
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    httpCommun
      .get(`/users/${clientId}`)
      .then((res) => {
        if (res.status === 200) {
          setClient(res.data?.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    httpCommun
      .get(`/books/${productId}`)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data?.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    httpCommun
      .get(`/orders/${orderId}`)
      .then((res) => {
        if (res.status === 200) {
          setOrder(res.data?.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="order-card p-4" style={{ width: "20rem" }}>
      <div className="text-container">
        <h3 className="card-title">Order</h3>
        <div className="card-body">
          Product : {product?.title}
          <br />
          Ordered by : {client?.firstName} {client?.lastName}
          <br />
          At : {formatDate(order?.createdAt)}
          <br />
          Email : {client?.email}
          <br />
          Phone number : {client?.contact}
          <button
            className="btn btn-danger del-order"
            onClick={() => {
              deleteOneOrder();
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
