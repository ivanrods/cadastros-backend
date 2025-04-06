import { ICidades } from "../../modules";

declare module 'knex/types/table'{
    interface Tables {
     cidades: ICidades
        // pessoa: IPessoa
        // usuario: IUsuario
    }
}