const Filme = require('../models/filme');

const filmeController = {
    async film_list(req, res) {
        try {
            const filmes = await Filme.findAll();
            res.json(filmes);
        } catch (error) {
            console.error('Erro ao listar filmes:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async filme_create(req, res) {
        try {
            const filme = await Filme.create(req.body);
            res.status(201).json(filme);
        } catch (error) {
            console.error('Erro ao criar filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async filme_detail(req, res) {
        const { id } = req.params;
        try {
            const filme = await Filme.findByPk(id);
            if (filme) {
                res.json(filme);
            } else {
                res.status(404).json({ error: 'Filme não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao obter filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async filme_update(req, res) {
        const { id } = req.params;
        try {
            const [updated] = await Filme.update(req.body, {
                where: { id }
            });
            if (updated) {
                res.json({ message: 'Filme atualizado com sucesso' });
            } else {
                res.status(404).json({ error: 'Filme não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async filme_delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Filme.destroy({
                where: { id }
            });
            if (deleted) {
                res.json({ message: 'Filme deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Filme não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao deletar filme:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
};

module.exports = filmeController;
