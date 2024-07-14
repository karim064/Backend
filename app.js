const express = require("express");
const cors = require("cors");
const arsipRoute = require('./src/routes/arsipRoute');
const kategoriRoute = require('./src/routes/kategoriRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/arsip', arsipRoute);
app.use('/api/kategori', kategoriRoute);

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Tambahkan ini untuk mendengarkan di semua antarmuka jaringan

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`));
