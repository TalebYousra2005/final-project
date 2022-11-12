/**
 * todo : add the apiRoutes function
 */
require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api");

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => console.log(`app listening on port : ${PORT}`));
