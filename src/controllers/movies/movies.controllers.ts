import { Request, Response } from "express";
import { createMoviesServices } from "../../services/movies/createMovies.service";
import { readMoviesServices } from "../../services/movies/readMovies.service";
import { IMoviesCreate } from "../../interfaces/movies.interfaces";
import { updateMoviesService } from "../../services/movies/updateMovies.service";
import { deleteMoviesService } from "../../services/movies/deleteMovies.service";
import { IPagination } from "../../interfaces/pagination.interfaces";
import { Movie } from "../../entities/movies.entity";

export const createMoviesControllers = async (req: Request, res: Response): Promise<Response | void> => {
  const bodyMovie: IMoviesCreate = res.locals.validated;
  console.log(bodyMovie)
  const movie: Movie = await createMoviesServices(bodyMovie);

  res.status(201).json(movie);
};

export const readMoviesControllers = async (req: Request, res: Response): Promise<Response> => {
  const allMovies: IPagination = await readMoviesServices(res.locals.pagination);

  return res.status(200).json(allMovies);
};

export const updateMoviesControllers = async (req: Request, res: Response): Promise<Response> => {
  const movieId = req.params.id;
  const movieBody = res.locals.validated;

  const movieUpdate = await updateMoviesService(movieId, movieBody);

  return res.status(200).json(movieUpdate);
};

export const deleteMoviesControllers = async (req: Request, res: Response): Promise<Response> => {
  const movieId = req.params.id;

  await deleteMoviesService(movieId);

  return res.status(204).json();
};
