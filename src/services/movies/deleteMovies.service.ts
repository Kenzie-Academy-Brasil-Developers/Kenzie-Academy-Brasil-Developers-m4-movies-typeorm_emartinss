import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const deleteMoviesService = (movieId: string): Promise<DeleteResult> => {
  const movieRepo: Repository<any> = AppDataSource.getRepository(Movie);
  const movieDelete = movieRepo.delete(movieId);

  return movieDelete;
};
