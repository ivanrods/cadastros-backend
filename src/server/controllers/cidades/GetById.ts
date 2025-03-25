import { Request, Response } from "express";
const { StatusCodes } = require('http-status-codes');
const yup = require('yup');

import { validation } from "../../shared/middleware";

interface IParamProps {
    id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

export const getById = async (
    req: Request<IParamProps>,
    res: Response
): Promise<void> => {
    if (Number(req.params.id) === 99999) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: "Registro não encontrado",
            },
        });
        return;
    }

    res.status(StatusCodes.OK).json({
        id: req.params.id,
        nome: "Caxias do Sul",
    });
};
