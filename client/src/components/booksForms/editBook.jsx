//* this is the form to handle updating a book 


import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { BookSchema } from "../../helper/form.validation";
import { useParams } from "react-router-dom";
import { updateOneBook } from "../../services/books.service";
import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";
import "./style.css";

export const EditBookForm = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/books/${id}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(BookSchema),
  });

  // setting form default values
  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = data ? data.title : "";
    defaultValues.author = data ? data.author : "";
    defaultValues.price = data ? data.price : "";
    defaultValues.subject = data ? data.subject : "";

    reset({ ...defaultValues });
  }, [data]);

  const { title, author, price, subject, image } = data;
  updateOneBook(
    { id, title, author, price, subject, image },
    dispatch,
    successNotification,
    errorNotification
  );
  return (
    <>
      <h1 className="text-center title">Add one book to sell</h1>
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
          <label className="form-label">Author</label>
          <input
            type="author"
            placeholder=". . . . . . . ."
            className="form-control"
            {...register("author")}
          />
          <p className="text-danger">{errors.author?.message}</p>
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
          <label>Post image</label>
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


