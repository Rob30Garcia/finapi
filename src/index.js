const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const costurmers = [];

app.post('/account', (request, response) => {
  const { cpf, name } = request.params;

  costurmers.push({
    cpf,
    name,
    id: uuidV4(),
    statements: []
  });

  return response.status(201).send();
});

app.listen(3333);
