import { Router } from "express";
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"

const router = Router();

router.post("/test", (req: Request, res: Response) => {
    console.log(req)
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body)
});
export { router };
