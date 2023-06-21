import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entity";
import { IPagination, IPaginationParams } from "../../interfaces/pagination.interfaces";

export const readMoviesServices = async ({ page, perPage, sort, order, prevPage, nextPage }: IPaginationParams): Promise<IPagination> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const [movies, count]: [Movie[], number] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};
