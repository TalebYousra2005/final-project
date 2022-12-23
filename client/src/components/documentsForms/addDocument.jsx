// *this the form to handle adding one book

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { DocumentSchema } from "../../helper/form.validation";
import { addOneDocument } from "../../services/documents.service";
import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";
import "./style.css";
// import currentUser from "../../redux/reducers/currentUser";

export const AddDocumentForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(DocumentSchema) });
  const dispatch = useDispatch();
  const handleFormSubmit = (data) => {
    // console.log(data);
    // login
    const { title, price, subject, image } = data;
    addOneDocument(
      { title, price, subject, image, ownerId: currentUser._id },
      dispatch,
      successNotification,
      errorNotification
    );
  };

  return (
    <>
      <h1 className="text-center title">Add one document to sell</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="title"
            placeholder=" . . . . . . . "
            className="form-control"
            {...register("title")}
          />
          <p className="text-danger">{errors.title?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="price"
            placeholder=". . . . . . . ."
            className="form-control"
            {...register("price")}
          />
          <p className="text-danger">{errors.price?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            type="subject"
            placeholder=". . . . . . . ."
            className="form-control"
            {...register("subject")}
          />
          <p className="text-danger">{errors.subject?.message}</p>
        </div>

        <div className="form-group">
          <label>Document image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            {...register("image")}
          />
          <p className="text-danger">{errors.image?.message}</p>
        </div>
        <button className="btn button">Add</button>
      </form>
    </>
  );
};
