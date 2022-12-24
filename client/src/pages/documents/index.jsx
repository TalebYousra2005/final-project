import useFetch from "../../hooks/useFetch";
import { ProductCard } from "../../components/product-card/index";
import { HomeLayout } from "../../components/layouts/home";
import { useState, useEffect } from "react";
import httpCommun from "../../http.commun";
import { ErrorFetch } from "../../components/error-fetch";
import "./style.css";
const DocumentsPage = () => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    httpCommun
      .get(`/documents`)
      .then((res) => {
        if (res.status === 200) {
          setDocuments(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(documents)
  return (
    <HomeLayout>
      <div className="container-fluid  product-container mt-3">
        <div className="row p-4">
          <div className="col-md-12 content-area">
            <h1 className="text-center">Our Documents</h1>
            <div className="grid-container row mt-5 p-4">
              {documents && documents.length === 0 && <h1>Not data to show</h1>}
              {documents &&
                documents.map((el) => {
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

export default DocumentsPage;
