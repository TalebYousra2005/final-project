import { Link, Outlet} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Compare } from "../../../helper/compareUrl";
import { signout } from "../../../services/auth.service";
import { useEffect,useState } from "react";
import httpCommun from "../../../http.commun";
import "./style.css";

export const UserPageLayout = () => {

  const { currentUser } = useSelector((state) => state.user);
  const [user,setUser]=useState(null)
  useEffect(() => {
    httpCommun
      .get(`/users/${currentUser?._id}`)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);
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
            {currentUser  && (
              <>
                <h5 className="sidebar-header p-3">Your profile</h5>
                <p className="sidebar-header p-3">
                  {user?.firstName} {user?.lastName}
                </p>
              </>
            )}

            <div className="sidebar-links">
              <p
                className={
                  Compare(`/user/${currentUser._id}`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${currentUser._id}`} className="d-block">
                  Profile info
                </Link>
              </p>

              <p
                className={
                  Compare(`/user/${currentUser._id}/books`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${currentUser._id}/books`} className="d-block">
                  My Books
                </Link>
              </p>

              <p
                className={
                  Compare(`/user/${currentUser._id}/documents`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${currentUser._id}/documents`} className="d-block">
                  My Documents
                </Link>
              </p>

              <p
                className={
                  Compare(`/user/${currentUser._id}/orders`, path.pathname)
                    ? "mb-0 p-3 active"
                    : "mb-0 p-3"
                }
              >
                <Link to={`/user/${currentUser._id}/orders`} className="d-block">
                  My Orders
                </Link>
              </p>

              <p className="mb-0 p-3">
                <Link to={`/`} className="d-block">
                  Home page
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
