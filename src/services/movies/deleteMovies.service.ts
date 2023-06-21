import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const deleteMoviesService = async (movieId: string): Promise<void> => {
  const movieRepo: Repository<any> = AppDataSource.getRepository(Movie);
  await movieRepo.delete(movieId);
};
