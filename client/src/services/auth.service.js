import http from "../http.commun";
import { signinUser, signupUser } from "../redux/reducers/auth";
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
      // console.log(res);
      if (res.status === 200) {
        const data = res.data.data;
        console.log(data);
        // const id = data._id
        sessionStorage.setItem("token", JSON.stringify(data));
        // console.log(`hello${sessionStorage.setItem("token", JSON.stringify(data.token))}`)
        dispatch(signinUser({ data }));
        successNotification(res.data.message);
        setTimeout(() => {
          // window.location = `/profile/${id}`;
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
      console.log(err.response.data.message);
      errorNotification(err.response.data.message);
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
        // sessionStorage.setItem("token", JSON.stringify(data));
        // console.log(`hello${sessionStorage.setItem("token", JSON.stringify(data.token))}`)
        dispatch(signupUser({ data }));
        successNotification(res.data.message);
        // setTimeout(() => {
        //   window.location = `/profile/${id}`;
        // }, 3000);
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
