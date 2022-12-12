import { HomeLayout } from "../layouts/home";

// ! owner id : f636c126a382a20869602ffbf

export const ProductDetails = ({ item }) => {
  const { _id, title, author, price, image,owner } = item;
  console.log(item);
  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className="mb-5">{title}</h1>

        <div className="col-md-3">
          <img src={image} alt="product img" width={200} height={400} />
        </div>
        <div className="col-md-5">
          <br />
          <p>
            {/* publisher : {owner.userName} */}
            {/* //todo add publiser name
             */}
          </p>

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
      <div className="row">
        <div className="col-md-6">
          <h1>Product details</h1>
          <p>
            Title :{title} <br />
            Publisher :{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
