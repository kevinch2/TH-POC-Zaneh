const http = require('http');
const port = 3000;

const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened.', err);
  }

  console.log(`Server is listening on ${port}`);
});

