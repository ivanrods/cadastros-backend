import express from "express";
import "dotenv/config";
import "./shared/services/TranslationsYup";
import { router } from "./routes";
const sever = express();

sever.use(express.json());

sever.use(router);

export { sever };
