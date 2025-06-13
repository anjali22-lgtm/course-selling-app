require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main(){
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to MongoDB");

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
}
 main().catch((err) => {
    console.log("MongoDB connection error:", err);
 });