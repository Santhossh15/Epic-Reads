const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.port || 5000
require('dotenv').config()
const bookRoutes = require('./src/books/book.route.js')

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))

app.use("/api/books", bookRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send("Epic-Reads Server running...!")
    })

}
main().catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
