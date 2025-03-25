import { Request, Response } from "express";
const { StatusCodes } = require('http-status-codes');
const yup = require('yup');

import { validation } from "../../shared/middleware";

interface ICidade {
    nome: string;
}
export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
}));

export const create = async (
    req: Request<{}, {}, ICidade>,
    res: Response
): Promise<void> => {
    res.status(StatusCodes.CREATED).json(1);
};