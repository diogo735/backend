const GeneroFilme = require('../models/genero_filme');

const generoFilmeController = {
    async criar(req, res) {
        try {
            const genero = await GeneroFilme.create(req.body);
            res.status(201).json(genero);
        } catch (error) {
            console.error('Erro ao criar gênero de filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async listar(req, res) {
        try {
            const generos = await GeneroFilme.findAll();
            res.status(200).json(generos);
        } catch (error) {
            console.error('Erro ao listar gêneros de filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const genero = await GeneroFilme.findByPk(id);
            if (!genero) {
                return res.status(404).json({ error: 'Gênero de filme não encontrado' });
            }
            res.status(200).json(genero);
        } catch (error) {
            console.error('Erro ao buscar gênero de filme por ID:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const { descricao } = req.body;
        try {
            const genero = await GeneroFilme.findByPk(id);
            if (!genero) {
                return res.status(404).json({ error: 'Gênero de filme não encontrado' });
            }
            await genero.update({ descricao });
            res.status(200).json(genero);
        } catch (error) {
            console.error('Erro ao atualizar gênero de filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async deletar(req, res) {
        const { id } = req.params;
        try {
            const genero = await GeneroFilme.findByPk(id);
            if (!genero) {
                return res.status(404).json({ error: 'Gênero de filme não encontrado' });
            }
            await genero.destroy();
            res.status(204).end();
        } catch (error) {
            console.error('Erro ao deletar gênero de filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
};

module.exports = generoFilmeController;
