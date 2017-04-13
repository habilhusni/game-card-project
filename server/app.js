const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/', index)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/game_card', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Game Card Connected!');
  }
});

app.listen(3000, function() {
  console.log("Server Jalan !");
})
