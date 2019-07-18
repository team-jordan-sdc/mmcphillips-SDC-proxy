const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());


app.get('/api/rand', (req, res) => {
  fetch('http://localhost:3002/api/rand')
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/personnel', (req, res) => {
  fetch(`http://localhost:3000/api/personnel?id=${req.query.id}`)
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/movies', (req, res) => {
  fetch(`http://localhost:3000/api/movies?feature=true`)
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/reviews', (req, res) => {
  console.log(req.query.filmname)
  fetch(`http://localhost:3001/api/reviews?filmname=The Shawshank Redemption`,{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
})



const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
