import { table } from "console";
import { Knex } from "knex";
import { ETableNames } from "../../controllers/ETableNames";

export async function up(knex: Knex) {
    return knex.schema
        .createTable(ETableNames.cidade, (table) => {
            table.bigIncrements("id").primary().index();
            table.string("nome", 150).index().notNullable();

            table.comment("Tabela usada para armazenar cidades no sistema.");
        })
        .then(() => {
            console.log(`# Created table ${ETableNames.cidade}`);
        });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.cidade).then(() => {
        console.log(`# Dropd table ${ETableNames.cidade}`);
    });
}
