const express = require('express');
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');
const axios =  require ("axios");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/cars', async (req, res) => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
      const cars = response.data;
  
      res.json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})