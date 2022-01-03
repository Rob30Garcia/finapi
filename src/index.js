const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const custormers = [];

app.post('/account', (request, response) => {
  const { cpf, name } = request.params;

  const custormerAlreadyExist = custormers.some((custormer) => custormer.cpf === cpf);

  if(custormerAlreadyExist) return response.status(400).json({ error: "CPF already exist"});

  custormers.push({
    cpf,
    name,
    id: uuidV4(),
    statements: []
  });

  return response.status(201).send();
});

app.listen(3333);
