import express, { request, response } from "express";

const app = express();

/*
* GET => Buscar uma informação
* POST => Inserir/criar uma informação
* PUT => Alterar uma informação
* DELETE => Remover uma informação/dado
* PATCH  => Alterar uma informação específica
*/

app.get("/test", (request,response) =>{
  //request - entrando
  //response - saíndo
  return response.send("Olá NLW");
})

app.post("/test-post", (request, response) =>{
  return response.send("Olá NLW método POST")
})
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

