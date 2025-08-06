const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
