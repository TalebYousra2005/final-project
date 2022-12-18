import { Link, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Compare } from "../../../helper/compareUrl";
import { signout } from "../../../services/auth.service";
import "./style.css";
import useFetch from "../../../hooks/useFetch";
export const UserPageLayout = () => {
  const id = useParams().id;
  const { currentUser } = useSelector((state) => state.user);
  const { data, loading, error } = useFetch(`/users/${id}`);
  console.log(data);
  const user = data?.data;
  const dispatch = useDispatch();
  const handleSignout = () => {
    signout(dispatch);
  };
  const path = useLocation();
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="dashboard-sidebar p-0 position-sticky top-0 sidebar col-md-2">
          <div className="sidebar-content ">
            {user && !error && (
              <>
                <h5 className="sidebar-header p-3">Your profile</h5>
                <p className="sidebar-header p-3">
                  {user.firstName} {user.lastName}
                </p>
              </>
            )}

            <div className="sidebar-links">
              <p
                className={
                  Compare(`user/${id}/`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${id}`} className="d-block">
                  Profile info
                </Link>
              </p>

              <p
                className={
                  Compare(`user/${id}/books`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${currentUser._id}/books`} className="d-block">
                  Books
                </Link>
              </p>
              <p className="mb-0 p-3">
                <button onClick={handleSignout}>Signout</button>
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-content col-md-10 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
