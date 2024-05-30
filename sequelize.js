require('dotenv').config();
const Sequelize = require('sequelize');

// Configurações de conexão com o banco de dados
/*
const sequelize = new Sequelize('AI2', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});
*/
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
});
// Testar a conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

module.exports = sequelize;
