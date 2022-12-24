import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import httpCommun from "../../http.commun";
import "./style.css"
export const ProductDetails = ({ item }) => {
  const { _id, title, author, price, image, ownerId } = item;
  // const {currentUser}=useSelector((state)=>state.user)
  const [user, setUser] = useState(null);

  useEffect(() => {
    httpCommun
      .get(`/users/${ownerId}`)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data?.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="mb-5">{title}</h1>
      <div className="row pt-5">  
        <div className="col-md-3">
          <img src={image} alt="product img" width={200} height={400} />
        </div>
        <div className="col-md-5 top-details">
          <br />
          <p>publisher : {user?.userName}</p>

          <p>price : {price}</p>
          <p>{author && <p>author : {author}</p>}</p>
          <p>
            {/* {discription} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            delectus nam, aliquid dicta minus quis exercitationem dolorum ullam
            voluptatum accusamus officia aliquam nesciunt ad molestiae
            consequuntur commodi, numquam veniam. Aperiam?
          </p>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-md-6">
          <h1>Product details</h1>
          <p>
            Title : {title} <br />
            Publisher : {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};
