// models/filme.js
const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const GeneroFilme = require('./genero_filme');

const Filme = sequelize.define('filme', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: Sequelize.STRING,
    titulo: Sequelize.STRING,
    foto: Sequelize.STRING
});

Filme.belongsTo(GeneroFilme, { as: 'generoFilme' }); // Corrigido para usar a chave primária de GeneroFilme como a chave estrangeira

module.exports = Filme;
