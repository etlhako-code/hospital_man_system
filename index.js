const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const appointments = require('./controllers/appointments');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.use('/appointment',appointments);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
