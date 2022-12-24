import { useParams } from "react-router-dom";
import {
  successNotification,
  errorNotification,
} from "../helper/notifications";
import http from "../http.commun";
import { signinUser, signupUser, signoutUser } from "../redux/reducers/auth";
import {
  addCurrentUser,
  removeCurrentUser,
} from "../redux/reducers/currentUser";
export const signin = (
  { email, password },
  dispatch,
  successNotification,
  errorNotification
) => {
  ///api call
  http
    .post("/auth/signin", { email, password })
    .then((res) => {
      if (res.status === 200) {
        const data = res.data.data;

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", data._id);
        dispatch(signinUser(data));
        dispatch(addCurrentUser(data));
        successNotification(res.data.message);
        const id = data._id;

        setTimeout(() => {
          window.location = `/user/${id}`;
        }, 3000);
      }
    })
    .catch((err) => {
      errorNotification(err.response?.data.message);
    });
};

// ! res.status(409) is not working
export const signup = (
  { firstName, lastName, userName, email, password, contact, studyFeild },
  dispatch,
  successNotification,
  errorNotification
) => {
  ///api call
  http
    .post("/auth/signup", {
      firstName,
      lastName,
      userName,
      email,
      password,
      contact,
      studyFeild,
    })
    .then((res) => {
      if (res.status === 201) {
        const data = res.data.data;
        dispatch(signupUser({ data }));
        successNotification(res.data.message);

        setTimeout(() => {
          window.location = `/`;
        }, 3000);
        successNotification("please login to your account");
      } 
    })
    .catch((err) => {
      errorNotification(err.response?.data.message);
    });
};

export const signout = (dispatch) => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    dispatch(signoutUser());
    dispatch(removeCurrentUser());
    successNotification("Successfuly signd out");
    setTimeout(() => {
      window.location = "/";
    }, [3000]);
  }
};
