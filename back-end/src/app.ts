import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

app.use(cors({
  origin: FRONTEND_ORIGIN,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("tiny"));

import { setupSwagger } from "./docs/swagger";
setupSwagger(app);

import router from "./routes/router";
app.use("/api/v1", router);

app.get("/", (_req, res) => {
  res.send("Welcome to the app");
});

export default app;
