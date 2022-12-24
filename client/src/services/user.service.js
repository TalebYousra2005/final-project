import http from "../http.commun";

import {
  successNotification,
  errorNotification,
} from "../helper/notifications";

export const updateOneUser = (
  id,
  firstName,
  lastName,
  userName,
  password,
  contact,
  studyFeild,
  dispatch
) => {
  http
    .put(`/users/${id}`, {
      id,
      firstName,
      lastName,
      userName,
      password,
      contact,
      studyFeild,
    })
    .then((res) => {
      if (res.status === 200) {
        successNotification("account info updated successfully");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};
