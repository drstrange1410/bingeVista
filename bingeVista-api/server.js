const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb+srv://harsh1410:Tiwari@cluster0.majqrwo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successfull');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/user', userRoutes);

app.listen(5000, () => {
  console.log('server started on port 5000');
});
