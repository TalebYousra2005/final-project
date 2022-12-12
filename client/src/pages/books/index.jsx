import useFetch from "../../hooks/useFetch";
import { ProductCard } from "../../components/product-card/index";
import { HomeLayout } from "../../components/layouts/home";
import { ErrorFetch } from "../../components/error-fetch";
import "./style.css";
const BooksPage = () => {
  const { data, loading, error } = useFetch("/books");
  // console.log(data)
  return (
    <HomeLayout>
      <div className="container-fluid  product-container mt-3">
        <div className="row p-4">
          <div className="col-md-3 sideBar-container">
            <div className="sideBar"></div>
          </div>

          <div className="col-md-9 content-area">
            <h1 className="text-center">Our Books</h1>
            <div className="grid-container row mt-5 p-4">
              {/* {loading && <Loading />} */}
              {error && (
                <ErrorFetch message="error while fetching posts list" />
              )}
              {data && data.length === 0 && <h1>Not data to show</h1>}
              {!error &&
                data &&
                data.data.map((el) => {
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
