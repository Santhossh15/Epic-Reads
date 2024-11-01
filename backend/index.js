const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.port || 5000
require('dotenv').config()
const bookRoutes = require('./src/books/book.route.js')
const orderRoutes = require("./src/orders/order.route.js")
const userRoutes = require("./src/users/user.route.js")
const adminRoutes = require("./src/stats/admin.stats.js")

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


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
