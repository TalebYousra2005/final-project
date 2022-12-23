import http from "../http.commun";

import {
  successNotification,
  errorNotification,
} from "../helper/notifications";

export const updateOneUser = ({
  id,
  firstName,
  lastName,
  userName,
  password,
  contact,
  studyFeild,
}) => {
  let formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("userName", userName);
  formData.append("password",password );
  formData.append("contact",contact );
  formData.append("studyFeild", studyFeild);
  // formData.append("image", image ? image[0] : null);
  http
    .put(`/users/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        successNotification("account info updated successfully");
        // setTimeout(() => {
        //   window.location = "/admin/posts";
        // }, 3000);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};
