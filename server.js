const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

<<<<<<< HEAD
app.listen(8080, () =>
  console.log('API is running on http://localhost:8080/login'),
=======
app.listen(3000, () =>
  console.log('API is running on http://localhost:3000/login'),
>>>>>>> 50d174c... step 2
);
