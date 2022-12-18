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
        // const id = data._id
        localStorage.setItem("token", JSON.stringify(data));
        localStorage.setItem("id", data._id);
        // console.log(`hello${localStorage.setItem("token", JSON.stringify(data.token))}`)
        dispatch(signinUser(data));
        dispatch(addCurrentUser(data));
        successNotification(res.data.message);
        const id = data._id;
        console.log(id);

        setTimeout(() => {
          window.location = `/user/${id}`;
        }, 3000);
      } else if (res.status === 404) {
        console.log("res.message 404");
        errorNotification(res.data.message);
      } else if (res.status === 409) {
        console.log("res.message 409");
        errorNotification(res.data.message);
      }
    })
    .catch((err) => {
      // const data = res.data;
      // console.log(err.response);
      errorNotification(err.response);
    });
};

// ! res.status(409) is not working
export const signup = (
  { firstName, lastName, userName, email, password, studyFeild },
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
      studyFeild,
    })
    .then((res) => {
      // console.log(res);
      if (res.status === 201) {
        const data = res.data.data;
        console.log(data);
        // const id = data._id
        localStorage.setItem("token", JSON(data));
        // console.log(`hello${localStorage.setItem("token", JSON.stringify(data.token))}`)
        dispatch(signupUser({ data }));
        successNotification(res.data.message);
        const id = data._id;
        setTimeout(() => {
          window.location = `/user/${id}`;
        }, 3000);
      } else if (res.status === 409) {
        console.log("res.message 409");
        errorNotification(`gggg${res.data.message}`);
      }
    })
    .catch((err) => {
      // const data = res.data;
      console.log(`${err}hello`);
      errorNotification(err.response.data.message);
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
