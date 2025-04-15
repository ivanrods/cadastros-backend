import { ICidades } from "../../models";

declare module "knex/types/table" {
    interface Tables {
        cidades: ICidades;
        // pessoa: IPessoa
        // usuario: IUsuario
    }
}
