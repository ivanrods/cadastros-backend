import { error } from "console";
import { ICidade } from "../../modules";
import { Knex } from "../../knex";
import { ETableNames } from "../../../controllers/ETableNames";

export const create = async (
    cidade: Omit<ICidade, "id">
): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.cidade)
            .insert(cidade)
            .returning("id");

        if (typeof result === "object") {
            return result.id;
        } else if (typeof result === "number") {
            return result;
        }
        return new Error("Erro ao cadastrar o registronew ");
    } catch (error) {
        console.log(error);
        return new Error("Erro os dadastrar o registro");
    }
};
