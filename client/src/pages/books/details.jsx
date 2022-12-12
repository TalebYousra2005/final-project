import { useParams } from "react-router-dom";
import { HomeLayout } from "../../components/layouts/home";
import { ProductDetails } from "../../components/product-details";
import useFetch from "../../hooks/useFetch";
import "./style.css";

const BookDetailsPage = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(`/books/${params.id}`);
  // console.log(data?.data);
  return (
    <HomeLayout>
      <div className="container-fluid product-container">
      {data && data.length === 0 && <h1>Not data to show</h1>}
      {data && !error && <ProductDetails item={data?.data} />}
      </div>
      
    </HomeLayout>
  );
};

export default BookDetailsPage;
