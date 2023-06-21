import { Repository } from "typeorm";
import { IMoviesCreate, iMovie } from "../../interfaces/movies.interfaces";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const createMoviesServices = async (bodyMovie: IMoviesCreate) => {
  
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const newMovie: Movie = movieRepo.create(bodyMovie);

  await movieRepo.save(newMovie);

  return newMovie;
};
