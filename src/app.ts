import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import { moviesRoutes } from "./routes/movies.routes";
import { errorHandlerMiddleware } from "./middlewares/handleErrors.middleware";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRoutes);
app.use(errorHandlerMiddleware);

export default app;
