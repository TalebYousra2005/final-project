import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "../../../helper/formateDate";
import httpCommun from "../../../http.commun";
import { deleteOneDocument } from "../../../services/documents.service";

const UserDocumentsPage = () => {
  const [documents, setDocuments] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    httpCommun
      .get(`/documents/user/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setDocuments(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container-fluid">
      <h1 className="text-center">My Documents</h1>
      <div className="row mt-5">
        <div className="col-md-2">
          <button
            className="btn btn-warning col-md-12"
            onClick={() => navigate(`/user/${params.id}/documents/create`)}
          >
            <span className="material-symbols-outlined">post_add</span>
          </button>
        </div>
      </div>
      <div className="data-container mt-5">
        {documents && (
          <table className="table table-bordered table-hover border-4 rounded">
            <thead>
              <tr>
                <th>title</th>
                <th>author</th>
                <th>price</th>
                <th>subject</th>
                <th>CreatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {documents &&
                documents.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.price}</td>
                      <td>{item.subject}</td>
                      <td>{formatDate(item.createdAt)}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteOneDocument(item._id)}
                        >
                          {/* <FontAwesomeIcon icon="fa-duotone fa-trash-can-list" /> */}
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>

                        <button
                          className="btn btn-success ml-2"
                          onClick={() =>
                            navigate(
                              `/user/${params.id}/documents/edit/${item._id}`
                            )
                          }
                        >
                          <span className="material-symbols-outlined">
                            edit_square
                          </span>
                        </button>
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
export default UserDocumentsPage;
