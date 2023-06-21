import { Movie } from "../entities/movies.entity";

export interface IPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
}

export interface IPaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}
