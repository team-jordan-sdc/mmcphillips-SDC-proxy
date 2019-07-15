const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/api/rand', (req, res) => {
  console.log('getting rand');
  fetch('localhost:3000/api/rand')
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});


const port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
