require('newrelic');
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const port = 8000;
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());


// app.get('/api/rand', (req, res) => {
//   fetch('http://ec2-52-14-123-217.us-east-2.compute.amazonaws.com:3002/api/rand')
//   .then(fres => fres.json())
//   .then(fres =>  {
//     res.status(200).send(fres);
//   });
// });

// app.get('/api/personnel', (req, res) => {
//   fetch(`http://ec2-18-222-146-41.us-east-2.compute.amazonaws.com:3000/api/personnel?id=${req.query.id}`)
//   .then(fres => fres.json())
//   .then(fres =>  {
//     res.status(200).send(fres);
//   });
// });

// app.get('/api/movies', (req, res) => {
//   fetch(`http://ec2-18-222-146-41.us-east-2.compute.amazonaws.com:3000/api/movies?id=${req.query.id}`)
//   .then(fres => fres.json())
//   .then(fres =>  {
//     res.status(200).send(fres);
//   });
// });

// app.get('/api/reviews', (req, res) => {
//   let filmname = req.query.id;
//   fetch(`http://localhost:3001/api/reviews?id=${filmname}`,{
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(fres => fres.json())
//   .then(fres =>  {
//     res.status(200).send(fres);
//   });
// });

app.get('/api/featured', (req, res) => {
  let id = req.query.id;
  fetch(`${process.env.SERVICE_URL}${id}`)
  .then(fres => fres.json())
  .then((fres) => {
    res.status(200).send(fres)
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
