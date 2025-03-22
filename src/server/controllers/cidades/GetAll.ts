import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IQuaryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

// Validação com Yup
export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQuaryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    })
  ),
}));

// Função para obter os dados
export const getAll = async (
  req: Request<{}, {}, {}, IQuaryProps>,
  res: Response
): Promise<void> => {
  console.log("Página:", req.query.page);
  console.log("Limite:", req.query.limit);
  console.log("Filtro:", req.query.filter);

  res.status(StatusCodes.OK).json({ message: "Dados recebidos com sucesso" });
};
