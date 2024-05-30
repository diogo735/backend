// index.js
const express = require('express');
require('dotenv').config();
const sequelize = require('./sequelize');
const filmeRoutes = require('./routes/filmeRoutes');
const generoFilmeRoutes = require('./routes/generoFilmesRoutes');
const Filme = require('./models/filme');
const GeneroFilme = require('./models/genero_filme');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
// Rotas para filmes
app.use('/filmes', filmeRoutes);

// Rotas para gêneros de filmes
app.use('/generos', generoFilmeRoutes);


sequelize.sync()
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar tabelas:', err);
    });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
