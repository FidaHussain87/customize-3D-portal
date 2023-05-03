import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dalleRoutes from "./routes/dalle.routes.js";
dotenv.config();

const app = express();

///middlewares////
app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
///routes///
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running correctly" });
});
app.use("/", dalleRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
