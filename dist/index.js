"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.sever.listen(process.env.PORT || 3333, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT || 3333}`);
});
