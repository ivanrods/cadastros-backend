import express from "express";
import "dotenv/config";
import cors from "cors";
import { JSONParseError } from "./shared/middleware";
import "./shared/services/TranslationsYup";
import { router } from "./routes";

const server = express();

const allowedOrigins = [
    "https://cadastros-frontend.vercel.app",
    "http://localhost:5173",
];

server.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    })
);

server.use(express.json());

server.use(JSONParseError);

server.use(router);

export { server };
