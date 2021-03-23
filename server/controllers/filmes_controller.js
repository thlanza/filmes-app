const Filmes = require('../models/filmes');


exports.showIndex = (req, res, next) => {
    res.send('rodando Filmes API');
}


exports.verFilmes = function (req, res) {
    Flimes.get(function (err, filmes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Filmes para serem exibidos",
            data: filmes,
            contagem: filmes.length
        });
    });
};

exports.criarFilme = (req, res, next) => {
      const filme = new Filmes({
           filme: req.body.filme
      });
   
      filme.save(function(err) {
        if (err)
            res.json(err);
        res.json({
            message: "Novo filme salvo!",
            data: filme
        })
      })
}

exports.verFilmeEspecifico = function (req, res) {
    Filmes.findById(req.params.filme_id, function (err, filme) {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes do filme',
            data: filme
        });
    });
};
// Handle update contact info
exports.atualizarFilme = function (req, res) {
Filmes.findById(req.params.filme_id, function (err, filme) {
        if (err)
            res.send(err);

        // piada.piada = req.body.piada ? req.body.piada : piada.piada;
// save the contact and check for errors
        filme.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Filme atualizado',
                data: filme
            });
        });
    });
};

exports.deletarFilme = function (req, res) {
    Filmes.remove({
        _id: req.params.filme_id
    }, function (err, filme) {
        if (err)
            res.send(err);
res.json({
            status: "sucesso",
            message: 'Filme deletado.'
        });
    });
};



