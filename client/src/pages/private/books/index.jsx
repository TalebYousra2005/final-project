import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorFetch } from "../../../components/error-fetch";
import { useEffect, useState } from "react";
import { formatDate } from "../../../helper/formateDate";
import httpCommun from "../../../http.commun";

const UserBooksPage = () => {
  const [books, setBooks] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    httpCommun
      .get(`/books/user/${currentUser._id}`)
      .then((res) => {
        if (res.status === 200) {
          setBooks(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(books);
  return (
    <div className="container-fluid">
      <h2>My books</h2>
      <div className="row mt-5">
        <div className="col-md-2">
          <button
            className="btn btn-warning col-md-12"
            onClick={() => navigate(`/user/${params.id}/books/create`)}
          >
            Add
          </button>
        </div>
      </div>
      <div className="data-container mt-5">
        {/* {loading && <Loading />} */}
        {/* {error && <ErrorFetch message="Error while fetchin contacts " />} */}
        {books && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>title</th>
                <th>body</th>
                <th>CreatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>{formatDate(item.createAt)}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteOnePost(item._id)}
                        >
                          x
                        </button>{" "}
                        /
                        <a
                          className="btn btn-success"
                          href={`/user/${params.id}/books/edit/${item._id}`}
                        >
                          v
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default UserBooksPage;
