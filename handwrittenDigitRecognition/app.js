const express = require('express')
const predict = require('./output');
const app = express();
app.post('/predict', async (req, res) => {
  const r = await predict(req.body.image);
  res.json(r);
});
app.listen(8080);
