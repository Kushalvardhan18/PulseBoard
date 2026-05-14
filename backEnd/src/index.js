import express from "express"
import dotenv from "dotenv"
import db from "./utils/db.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config()
const app = express()

app.use(express.json())

db()

// app.use("/api/v1/polls",pollRoutes)
// app.use("/api/v1/users",userRoutes)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.use("/api/v1/users", userRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!')
})