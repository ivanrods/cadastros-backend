import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IQuaryProps {
    page?: number;
    limit?: number;
    filter?: string;
}
export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQuaryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            filter: yup.string().optional(),
        })
    ),
}));

export const getAll = async (
    req: Request<{}, {}, {}, IQuaryProps>,
    res: Response
) => {
    console.log(req.query.page);
    return res.status(StatusCodes.CREATED).json("Não");
};
