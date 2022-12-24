import {
  errorNotification,
  successNotification,
} from "../helper/notifications";
import http from "../http.commun";

export const addOrder = (productId, clientId, sellerId) => {
  http
    .post("/orders/create", { productId, clientId, sellerId }, {})
    .then((res) => {
      if (res.status === 200) {
        successNotification(res.data.message);
      }
    })
    .catch((err) => {
      errorNotification(err.message);
    });
};
