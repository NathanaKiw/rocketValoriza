npm install --global yarn -> instala yarn

yarn init -y - inicializa o projeto com package.json

yarn add typescript -D -> adiciona módulos do typescript e dependencias somente para desenvolvimento (adiciona node_modules e yarn.lock)

yarn tsc --init -> inicializa o typescript (adiciona tsconfig.json)

yarn tsc -> converte typescript para javascript

yarn add express -> adiciona express

yarn add @types/express -D -> Quando aparecem três pontos na importação de uma biblioteca na maioria das vezes é pedindo para instalar a tipagem da biblioteca que está em outra biblioteca @types/express por exemplo, adiciona com dependencia de desenvolvimento

yarn add ts-node-dev -D -> automatiza a converção de typescript para javascript

yarn add typeorm reflect-metadata sqlite3 -> adiciona orm de banco de dados sqLite

yarn typeorm migration:create -n CreateUsers -> cria uma migration users

yarn typeorm migration:run -> Cria tabela no banco de dados

yarn typeorm migration:revert -> reverte a ultima migration

\* MÉTODOS HTTP

- GET => Buscar uma informação
- POST => Inserir/criar uma informação
- PUT => Alterar uma informação
- DELETE => Remover uma informação/dado
- PATCH => Alterar uma informação específica

\* Tipos de parâmetros

- Routes params => http://localhost:3000/produtos/idDoProduto
- Query params => http://localhost:3000/produtos?name=teclado&description=teclado
- Body params (não utiliza para o método GET) => {
  "name": "teclado",
  "description": "teclado bom"
  }
  \*/

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
