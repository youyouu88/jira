const express = require('express');
const db = require('./connect');

const app = express();
app.use(express.json());

//const emp = require('./routes/emp');
//const tik = require('./routes/tik');
console.log('About to import dep routes...');
const dep = require('./routes/dep');
console.log('Dep routes imported successfully');
db();

//app.use('/employee',emp);
console.log('Registering /dep routes...');
app.use('/dep',dep);
console.log('Routes registered');
//app.use('/ticket',tik);
//app.use('/acceuil',tik);


app.listen(5500, () => {
  console.log('Server running on port 5500');
});