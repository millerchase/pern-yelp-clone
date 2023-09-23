require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3005;
const app = express();

// express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
