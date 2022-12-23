import {
  errorNotification,
  successNotification,
} from "../helper/notifications";
import http from "../http.commun";

export const addOrder = ({ productId, clientId, sellerId }) => {
  var formData = new FormData();
  formData.append("productId", productId);
  formData.append("clientId", clientId);
  formData.append("sellerId", sellerId);
  http
    .post("/orders/create", formData, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        successNotification(res.data.message);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};
