import { Router } from "express";
import { moviesCreate, moviesUpdate } from "../schemas/movies.schemas";
import {
  createMoviesControllers,
  deleteMoviesControllers,
  readMoviesControllers,
  updateMoviesControllers,
} from "../controllers/movies/movies.controllers";
import { veridyIdExist } from "../middlewares/movies/verifyIdExist.middleware";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { verifyNameExist } from "../middlewares/movies/verifyNameExist.middleware";
import { pagination } from "../middlewares/movies/pagination.middleware";

export const moviesRoutes: Router = Router();

moviesRoutes.post("", validatedBody(moviesCreate), verifyNameExist, createMoviesControllers);
moviesRoutes.get("", pagination, readMoviesControllers);
moviesRoutes.patch("/:id", veridyIdExist, validatedBody(moviesUpdate), verifyNameExist, updateMoviesControllers);
moviesRoutes.delete("/:id", veridyIdExist, deleteMoviesControllers);
