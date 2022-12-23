import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HomeLayout } from "../../components/layouts/home";
import httpCommun from "../../http.commun";
import { ProductDetails } from "../../components/product-details";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import { useSelector } from "react-redux";
import { addOrder } from "../../services/order.service";

const BookDetailsPage = () => {
  const params = useParams();
  const [book, setBook] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    httpCommun
      .get(`/books/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setBook(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const orderInfo = {
    productId: params?.id,
    clientId: currentUser?._id,
    sellerId: book?.ownerId,
  };
  return (
    <HomeLayout>
      <div className="container-fluid product-container">
        {book && <ProductDetails item={book} />}

        {currentUser && (
          <div className="row col-md-2 offset-md-5">
            <button
              onClick={() => {
                addOrder(orderInfo);
              }}
              className="btn btn-warning m-5"
            >
              Order
            </button>
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default BookDetailsPage;
