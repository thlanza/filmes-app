const express = require('express');
const { showIndex, 
     verFilmes,
     criarFilme,
     verFilmeEspecifico,
     atualizarFilme, 
     deletarFilme} = require('../controllers/filmes_controller');
const router = express.Router();

router.get('/', showIndex);

router.route('/filmes')
    .get(verFilmes)
    .post(criarFilme);

router.route('/filmes/:filme_id')
     .get(verFilmeEspecifico)
     .patch(atualizarFilme)
     .put(atualizarFilme)
     .delete(deletarFilme);

// Export API routes
module.exports = router;
