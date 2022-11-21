import http from "../http.commun";


export const signin = (
    { email, password },
    dispatch,
    successNotification,
    errorNotification
  ) => {
    ///api call
    axios
      .post("http://localhost:4000/api/auth/signin", { email, password })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          sessionStorage.setItem("token", JSON.stringify(data));
          dispatch(signinUser({ data }));
          successNotification("signed in succesfully");
          setTimeout(() => {
            window.location = "/admin";
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        errorNotification(err.response.data);
      });
  };