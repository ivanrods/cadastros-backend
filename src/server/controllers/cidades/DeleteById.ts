import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
}));

export const deleteById = async (
    req: Request<IParamProps>,
    res: Response
): Promise<void> => {
    const { id } = req.params;

    if (Number(id) === 99999) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: "Erro interno ao tentar apagar o registro",
            },
        });
        return;
    }

    res.status(StatusCodes.NO_CONTENT).send(); // 204: No Content
};
