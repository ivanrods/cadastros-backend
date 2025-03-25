import { Request, Response } from "express";
const { StatusCodes } = require('http-status-codes');
const yup = require('yup');

import { validation } from "../../shared/middleware";

interface IParamProps {
    id?: number;
}

interface IBodyProps {
    nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

export const updateById = async (
    req: Request<IParamProps, {}, IBodyProps>,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    const { nome } = req.body;

    if (Number(id) === 99999) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: "Erro interno ao tentar atualizar o registro",
            },
        });
        return;
    }

    res.status(StatusCodes.NO_CONTENT).send();
};
