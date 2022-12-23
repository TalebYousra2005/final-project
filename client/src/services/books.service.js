import http from "../http.commun";

import {
  successNotification,
  errorNotification,
} from "../helper/notifications";

export const addOneBook = ({
  title,
  author,
  price,
  subject,
  image,
  ownerId,
}) => {
  // const token = localStorage.getItem("token");
  // send our data as form ddta
  var formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("price", price);
  formData.append("subject", subject);
  formData.append("image", image[0]);
  formData.append("ownerId", ownerId);
  http
    .post("/books/create", formData, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        successNotification("book added succesfully");
        setTimeout(() => {
          window.location = `/user/${ownerId}/books`;
        }, 3000);
      } else if (res.status === 403) {
        return errorNotification("Please signin for this action");
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};

export const updateOneBook = ({ id, title, author, price, subject, image }) => {
  let formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("price", price);
  formData.append("subject", subject);
  formData.append("image", image ? image[0] : null);
  http
    .put(`/books/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        successNotification("Book updated successfully");
        // setTimeout(() => {
        //   window.location = "/admin/posts";
        // }, 3000);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};

export const deleteOneBook = (id) => {
  http.delete(`/books/${id}`).then((res) => {
    if (res.status === 200) {
      successNotification("book deleted successfully");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
    }
  });
};
