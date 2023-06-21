import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../../entities/movies.entity";
import { AppDataSource } from "../../data-source";
import AppError from "../../error";

export const veridyIdExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await movieRepo.findOneBy({ id: parseInt(req.params.id) });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};
