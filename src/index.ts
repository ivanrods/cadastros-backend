import { sever } from "./server/Server";
const PORT = 3333;
sever.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
