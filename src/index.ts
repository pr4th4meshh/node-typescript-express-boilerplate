import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

dotenv.config()

const PORT = process.env.PORT

if (!PORT) {
  console.log("Port not set in .env file")
  process.exit(1)
}
// * ADD THIS AS WELL FOR MONGODB
// mongoose
//   .connect(process.env.MONGODB_URI as string)
//   .then(() => {
//     console.log("Connected to MongoDB")
//   })
//   .catch((err) => {
//     console.log(err)
//   })
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))

// external routes
// app.use('/api/v1/users', "YOURROUTENAME");

app.listen(4000, () => {
  console.log(`Server started on port ${PORT}`)
})

app.get("/", (req, res) => {
  res.json({ message: "Hello World" })
})