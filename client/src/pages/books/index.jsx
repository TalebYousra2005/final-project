import useFetch from "../../hooks/useFetch";
import { ProductCard } from "../../components/product-card/index";
import { HomeLayout } from "../../components/layouts/home";
import { useState, useEffect } from "react";
import httpCommun from "../../http.commun";
import { ErrorFetch } from "../../components/error-fetch";
import "./style.css";
const BooksPage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    httpCommun
      .get(`/books`)
      .then((res) => {
        if (res.status === 200) {
          setBooks(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <HomeLayout>
      <div className="container-fluid  product-container mt-3">
        <div className="row p-4">
          <div className="col-md-12 content-area">
            <h1 className="text-center">Our Books</h1>
            <div className="grid-container row mt-5 p-4">
              {books && books.length === 0 && <h1>Not data to show</h1>}
              {books &&
                books.map((el) => {
                  return (
                    <div className="g-col-md-4" key={el._id}>
                      <ProductCard item={el} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default BooksPage;
