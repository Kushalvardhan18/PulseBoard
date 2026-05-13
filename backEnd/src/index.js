import express from "express"
import dotenv from "dotenv"
import db from "./utils/db.js"

dotenv.config()
const app= express()

app.use(express.json())

db()

// app.use("/api/v1/users",userRoutes)
// app.use("/api/v1/polls",pollRoutes)
// app.use("/api/v1/users",userRoutes)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})