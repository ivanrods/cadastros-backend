import { ICidades } from "../../models";

declare module "knex/types/table" {
    interface Tables {
        cidade: ICidades;
        pessoa: IPessoa;
        // usuario: IUsuario
    }
}
