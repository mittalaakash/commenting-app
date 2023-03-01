const express = require('express');
const app = express();

const http = require('http').Server(app);
const cors = require('cors');

const { users } = require('./lib/users');
const { listComments, createComment } = require('./lib/comments');

const io = require('socket.io')(http, {
  cors: {
    orgin: 'http://localhost:3000',
  },
});

const PORT = 4000;

app.use(cors());
app.use(express.json());

io.on('connection', socket => {
  console.log(`⭐️ Socket connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`⭐️ Socket disconnected: ${socket.id}`);
  });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/comments', (req, res) => {
  const comments = listComments();
  res.json(comments);
});

app.post('/comments', (req, res) => {
  // POST request
  const comment = createComment(req.body);
  io.emit('new-comment', { comment });
  res.json(comment);
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
