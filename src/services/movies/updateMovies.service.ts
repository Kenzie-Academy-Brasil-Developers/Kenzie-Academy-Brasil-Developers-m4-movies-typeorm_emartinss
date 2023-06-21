import { Repository, UpdateResult } from "typeorm";
import { IMoviesCreate, iMovie } from "../../interfaces/movies.interfaces";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const updateMoviesService = async (movieId: string, movieBody: IMoviesCreate): Promise<iMovie | null> => {
  const movieRepo: Repository<iMovie> = AppDataSource.getRepository(Movie);
  const update = await movieRepo.update(movieId, movieBody);

  const updatedMovie = await movieRepo.findOneBy({ id: parseInt(movieId) });

  return updatedMovie;
};
