import http from "../http.commun";

import {
  successNotification,
  errorNotification,
} from "../helper/notifications";

export const addOneDocument = ({ title, price, subject, image, ownerId }) => {
  var formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("subject", subject);
  formData.append("image", image[0]);
  formData.append("ownerId", ownerId);
  http
    .post("/documents/create", formData, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        successNotification("document added succesfully");
        setTimeout(() => {
          window.location = `/user/${ownerId}/documents`;
        }, 3000);
      } else if (res.status === 403) {
        return errorNotification("Please signin for this action");
      }
    })
    .catch((err) => {
      errorNotification({ message: err.message });
    });
};

export const updateOneDocument = ({
  id,
  title,
  price,
  subject,
  image,
  ownerId,
}) => {
  var formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("subject", subject);
  formData.append("image", image[0]);
  formData.append("ownerId", ownerId);
  http
    .put(`/documents/${id}`, formData, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        successNotification("Document updated successfully");
        setTimeout(() => {
          window.location = `/user/${ownerId}/documents`;
        }, 3000);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
      console.log(err);
    });
};

export const deleteOneDocument = (id) => {
  http.delete(`/documents/${id}`).then((res) => {
    if (res.status === 200) {
      successNotification("document deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  });
};
