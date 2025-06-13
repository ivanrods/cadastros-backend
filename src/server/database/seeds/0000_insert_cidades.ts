import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.cidade).count<
        [{ count: number }]
    >("* as count");
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const cidadesToInsert = cidadesDoRioGrandeDoSul.map((nomeDaCidade) => ({
        nome: nomeDaCidade,
    }));
    await knex(ETableNames.cidade).del();
    await knex(ETableNames.cidade).insert(cidadesToInsert);
};

const cidadesDoRioGrandeDoSul = ["Buriti dos Lopes", "Parnaíba", "Caxingó"];
