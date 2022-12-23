import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { HomeLayout } from "../../components/layouts/home";
import httpCommun from "../../http.commun";
import { ProductDetails } from "../../components/product-details";
import useFetch from "../../hooks/useFetch";
import "./style.css";

const BookDetailsPage = () => {
  const params = useParams();
  const [book, setBook] = useState(null);

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

  return (
    <HomeLayout>
      <div className="container-fluid product-container">
        {book && <ProductDetails item={book} />}
      </div>
    </HomeLayout>
  );
};

export default BookDetailsPage;
