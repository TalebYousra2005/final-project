import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import httpCommun from "../../../http.commun";
import { OrderCard } from "../../../components/orderCard";

const UserOrdersPage = () => {
  const [orders, setOrders] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    httpCommun
      .get(`/orders/user`)
      .then((res) => {
        if (res.status === 200) {
          setOrders(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(orders);

  return (
    // <div className="container-fluid">
    //   <h2>My orders</h2>
    //   {/* <div className="row mt-5">
    //     <div className="col-md-2">
    //       <button
    //         className="btn btn-warning col-md-12"
    //         onClick={() => navigate(`/user/${params.id}/orders/create`)}
    //       >
    //         <span className="material-symbols-outlined">post_add</span>
    //       </button>
    //     </div>
    //   </div> */}
    //   <div className="data-container mt-5">

    //           {orders &&
    //             orders.map((item) => {
    //               return(
    //                 <div className="container-fluid  product-container mt-3">
    //     <div className="row p-4">
    //       <div className="col-md-12 content-area">
    //         <h1 className="text-center">Our orders</h1>
    //         <div className="grid-container row mt-5 p-4">
    //           {orders && orders.length === 0 && <h1>Not data to show</h1>}
    //           {orders &&
    //             orders.map((el) => {
    //               return (
    //                 <div className="g-col-md-4" key={el._id}>
    //                   <ProductCard item={el} />
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //               )
    //             })}

    //   </div>
    // </div>
    <div className="container mt-3">
      <div className="row p-4">
        <div className="col-md-12 content-area">
          <h1 className="text-center">My orders</h1>
          <div className="grid-container row mt-5 p-4">
            {orders && orders.length === 0 && <h1>Not data to show</h1>}
            {orders &&
              orders.map((el) => {
                return (
                  <div className="g-col-md-4" key={el._id}>
                    <OrderCard
                      productId={el.productId}
                      clientId={el.clientId}
                      orderId={el._id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserOrdersPage;
