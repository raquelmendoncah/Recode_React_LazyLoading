const mongoose = require('mongoose');

const connection = () => {
  mongoose
    .connect('mongodb://localhost/fullstackraquel', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Banco de dados NoSQL conectado!');
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connection();
