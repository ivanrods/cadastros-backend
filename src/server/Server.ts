import express, { Request, Response } from "express";
import 'dotenv/config'
import {router} from './routes'
const sever = express();

sever.use(express.json())

sever.use(router)

export { sever };
