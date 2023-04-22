require('dotenv').config();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 5000;

console.log("=======🚀 ~ file: index.js:5 ~ port:", port)

const app = express();

console.log('INDEX FILE')

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./public/routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
