//post_model.js
const mongoose = require('mongoose');
const filmesSchema = mongoose.Schema({
      titulo:{
        type: String,
        required: true
      },
      data_criado:{
        type: Date,
        default: Date.now
      }
});
let Filmes = module.exports = mongoose.model('Filmes', filmesSchema);
module.exports.get = function (callback, limit) {
    Filmes.find(callback).limit(limit);
}


