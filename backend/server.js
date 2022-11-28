const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors()); // MIDDLEWARE
app.use(express.json()); 

app.get('/api/v1/get_test', (req, res) => {
  const dummyUser = { username: "John", password: "Doe" };

  res.send(dummyUser);
});

app.post('/api/v1/post_test', (req, res) => {
  const dummyUser = { username: "John", password: "Doe" };

  const user = req.body;

  console.log(user);

  if (user.username === dummyUser.username && user.password === dummyUser.password) {
    res.send({ message: "Login success", username: user.username });
  } else {
    res.sendStatus(403);
  }
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});