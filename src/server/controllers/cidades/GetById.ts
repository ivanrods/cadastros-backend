import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';


interface IParamProps {
  id?: number;
}
export const getByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const getById = async (req: Request<IParamProps>, res: Response): Promise<void> => {
    console.log(req.params);
  
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
  };
  