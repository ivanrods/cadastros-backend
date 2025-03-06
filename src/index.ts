import { sever } from "./server/Server";

sever.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT || 3333}`);
});
