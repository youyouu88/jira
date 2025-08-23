const express = require('express');
const db = require('./connect');

const app = express();
const port = 8080;
const router = express.Router();
const emp = require('routes/emp')
const tik = require('routes/tik')
const dep = require('routes/dep')
db();

app.use(express.json());
app.use('/employee/id/:id',emp);
app.use('',dep);
app.use('/ticket',tik);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});