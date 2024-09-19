import express from "express";
import router from "./routes/routes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import cors from "cors";
const app = express();
dotenv.config();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use("/washingmachine", router);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
