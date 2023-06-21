import { Repository } from "typeorm";
import { IMoviesCreate, iMovie } from "../../interfaces/movies.interfaces";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";

export const createMoviesServices = async (bodyMovie: IMoviesCreate) => {
    console.log(bodyMovie)
  const movieRepo: Repository<iMovie> = AppDataSource.getRepository(Movie);
  const newMovie: iMovie = movieRepo.create(bodyMovie);

  await movieRepo.save(newMovie);

  return newMovie;
};
