//app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const api_routes = require('./server/routes/api-routes.js');
const cors = require("cors");

dotenv.config();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
);


app.use(express.json());
app.use(express.static(__dirname + '/dist/angular-material-base'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/angular-material-base/index.html')
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
})
app.use('/', api_routes);

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
  .then(()=>{
    app.listen(process.env.PORT || 3002);
    console.log('database connected!');})
  .catch(err => console.log(err));
