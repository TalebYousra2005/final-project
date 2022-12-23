import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HomeLayout } from "../../components/layouts/home";
import httpCommun from "../../http.commun";
import { ProductDetails } from "../../components/product-details";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import { useSelector } from "react-redux";
import { addOrder } from "../../services/order.service";

const DocumentDetailsPage = () => {
  const params = useParams();
  const [document, setDocument] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    httpCommun
      .get(`/documents/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setDocument(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeLayout>
      <div className="container-fluid product-container">
        {document && <ProductDetails item={document} />}

        {currentUser && (
          <div className="row col-md-2 offset-md-5">
            <button
              onClick={() => {
                addOrder(params?.id, currentUser?._id, document?.ownerId);
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

export default DocumentDetailsPage;
