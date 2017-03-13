const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

const app = express();
const port = 3000;
let messages = [];

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', (req, res, next) =>{
  res.status(200).send({messages: messages})
});

app.post('/messages', (req, res, next) =>{
  messages.push({message: req.body.message, time: new Date()});
  res.status(200).send({messages: messages});

});




app.listen(port, () => {
  console.log(`listening on ${port}`);
});
