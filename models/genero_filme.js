const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const GeneroFilme = sequelize.define('genero_filme', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: Sequelize.STRING
});
module.exports = GeneroFilme;
