const database = require('../database/database');


exports.listarTreinos = (req, res) => res.json(database.select('treinos'));

exports.criarTreino = (req, res) => {
    const { nome, duracao } = req.body;
    if (!nome || !duracao) return res.status(400).json({ message: 'Nome e duração obrigatórios!' });

    database.insert('treinos', nome, { nome, duracao });
    res.status(201).json({ message: `Treino de ${nome} criado!` });
};

exports.buscarTreino = (req, res) => {
    const treino = database.select('treinos')[req.params.nome];
    treino ? res.json(treino) : res.status(404).json({ message: 'Treino não encontrado' });
};

exports.atualizarTreino = (req, res) => {
    const atualizado = database.update('treinos', req.params.nome, req.body);
    atualizado ? res.json({ message: `Treino de ${req.params.nome} atualizado!` }) : res.status(404).json({ message: 'Treino não encontrado' });
};

exports.excluirTreino = (req, res) => {
    const deletado = database.delete('treinos', req.params.nome);
    deletado ? res.json({ message: `Treino de ${req.params.nome} excluído!` }) : res.status(404).json({ message: 'Treino não encontrado' });
};
