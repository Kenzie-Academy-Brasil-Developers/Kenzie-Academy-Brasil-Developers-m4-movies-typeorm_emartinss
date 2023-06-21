import { movies, moviesCreate } from "../schemas/movies.schemas";
import { z } from "zod";

export type iMovie = z.infer<typeof movies>;
export type IMoviesCreate = z.infer<typeof moviesCreate>;
