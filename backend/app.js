const app = require('./src/config/server');
const messagesModel = require('./src/models/messagesModel');
const mysqlConnection = require('./src/config/mysqlConnection');
const mongoConnection = require('./src/config/mongoConnection');

app.get('/produtos', (req, res) => {
  mysqlConnection.query(
    'SELECT * FROM fullstackraquel.produto pro JOIN fullstackraquel.categoria cat ON pro.id_categoria = cat.id',
    (error, result) => {
      res.json(result ? result : error);
    }
  );
});

app.get('/mensagens', async (req, res) => {
  let resultado = await messagesModel.find().sort({
    _id: -1,
  });

  res.json(resultado);
});

app.post('/mensagens', async (req, res) => {
  const { nome, msg } = req.body;

  let resultado = await messagesModel.create({ nome, msg });
  res.json(resultado);
});
