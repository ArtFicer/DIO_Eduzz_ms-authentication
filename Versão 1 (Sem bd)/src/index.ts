import express from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
const app = express();

//Middlewares
app.use(express.json());

//Rotas
app.use(usersRoute);
app.use(statusRoute);

//Iniciando o servidor
app.listen(3000, () => {
  console.log("Rodando! Porta 3000");
});
