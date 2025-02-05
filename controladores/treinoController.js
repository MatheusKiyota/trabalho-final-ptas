const database = require('../database/database');

exports.listarTreinos = (req, res) => {
    if (database.select('treinos')) {
        res.json(database.select('treinos'));
    } else {
        res.status(404).json({ message: 'Nenhum treino encontrado' });
    }
};

exports.criarTreino = (req, res) => {
    const { nome, duracao } = req.body;
    if (!nome || !duracao) {
        res.status(400).json({ message: 'Nome e duração obriagtorios' });
    } else {
        database.insert('treinos', nome, { nome, duracao });
        res.status(201).json({ message: `Treino de ${nome} criado!` });
    }
};

exports.buscarTreino = (req, res) => {
    const treino = database.select('treinos')[req.params.nome];
    if (treino) {
        res.json(treino);
    } else {
        res.status(404).json({ message: 'Treino não encontrado' });
    }
};

exports.atualizarTreino = (req, res) => {
    const atualizado = database.update('treinos', req.params.nome, req.body);
    if (atualizado) {
        res.json({ message: `Treino de ${req.params.nome} atualizado!` });
    } else {
        res.status(404).json({ message: 'Treino não encontrado' });
    }
};

exports.excluirTreino = (req, res) => {
    const deletado = database.delete('treinos', req.params.nome);
    if (deletado) {
        res.json({ message: `Treino de ${req.params.nome} excluído!` });
    } else {
        res.status(404).json({ message: 'Treino não encontrado' });
    }
};
