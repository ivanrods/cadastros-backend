import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICIdade {
    nome: string;
}

const bodyValidation: yup.Schema<ICIdade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICIdade>, res: Response) => {
    let validatedData: ICIdade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, {
            abortEarly: false,
        });
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};
        yupError.inner.forEach((error) => {
            if (!error.path) return;

            errors[error.path] = error.message;
        });
        return res.status(StatusCodes.BAD_REQUEST).json({errors});
    }
    console.log(validatedData);
    return res.send("Create!");
};
