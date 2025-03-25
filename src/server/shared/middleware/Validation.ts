import { RequestHandler, Request, Response, NextFunction } from "express";
import { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup";
import { StatusCodes } from "http-status-codes";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T extends Maybe<AnyObject>>(
    schema: ObjectSchema<T>
) => ObjectSchema<T>;

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
    (getAllSchemas) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const schemas = getAllSchemas((schema) => schema);

        const errorsResult: Record<string, Record<string, string>> = {};

        Object.entries(schemas as Partial<TAllSchemas>).forEach(([key, schema]) => {
            try {
                schema.validateSync(req[key as TProperty], {
                    abortEarly: false,
                });
            } catch (err) {
                if (err instanceof ValidationError) {
                    const errors: Record<string, string> = {};
                    err.inner.forEach((error) => {
                        if (error.path) {
                            errors[error.path] = error.message;
                        }
                    });
                    errorsResult[key] = errors;
                }
            }
        });

        if (Object.entries(errorsResult).length === 0) {
            return next();
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
            return;
            
        }
    };
