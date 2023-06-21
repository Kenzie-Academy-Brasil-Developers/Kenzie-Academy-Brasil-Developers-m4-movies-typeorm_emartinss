import { Repository } from "typeorm";
import { IMoviesCreate } from "../../interfaces/movies.interfaces";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const updateMoviesService = async (movieId: string, movieBody: IMoviesCreate): Promise<Movie | null> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  await movieRepo.update(movieId, movieBody);

  const updatedMovie = await movieRepo.findOneBy({ id: parseInt(movieId) });

  return updatedMovie;
};
