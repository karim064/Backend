const express = require("express");
const cors = require("cors");
const arsipRoute = require('./src/routes/arsipRoute')
const kategoriRoute = require('./src/routes/kategoriRoute')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/api/arsip', arsipRoute);
app.use('/api/kategori', kategoriRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));