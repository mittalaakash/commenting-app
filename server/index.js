const express = require('express');
const app = express();

const http = require('http').Server(app);
const cors = require('cors');

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Hello USERS!');
});

app.get('/comments', (req, res) => {
  res.send('Hey there COMMENTS!');
});

app.post('/comments', (req, res) => {
  // POST request
  console.log(req.body);
  res.send('Hello COMMENTS!');
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
