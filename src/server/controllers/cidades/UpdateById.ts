import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';


interface IParamProps {
  id?: number;
}
interface IBodyProps {
  nome: string;
}
export const updateByIdValidation = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (
    req: Request<IParamProps, {}, IBodyProps>, 
    res: Response
  ): Promise<void> => {
    console.log(req.params);
    console.log(req.body);
  
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
  };
  