import { Repository } from "typeorm";
import { Movie } from "../../entities/movies.entity";
import { AppDataSource } from "../../data-source";
import { NextFunction, Response, Request } from "express";
import AppError from "../../error";

export const verifyNameExistUpdate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await movieRepo.findOneBy({ id: parseInt(req.params.id) });

  if (movie!.name === req.body.name) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};

export const verifyNameExistCreate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await movieRepo.findOneBy({ name: req.body.name });

  if (movie) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};
